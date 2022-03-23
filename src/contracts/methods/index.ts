import { ethers, Wallet, Contract, constants, ContractTransaction, ContractReceipt } from 'ethers';
import ETHLeverageABI from '@contracts/abis/ETHLeverageABI';
import FactoryABI from '@contracts/abis/FactoryABI';
import ERC20ABI from '@contracts/abis/ERC20ABI';
import KOVAN_CONSTANTS from '@contracts/constants';
import ETHLeverageByteCode from '@contracts/bytecodes/ETHLeverageByteCode';

let provider: ethers.providers.Web3Provider;
if (typeof window !== 'undefined') {
      provider = new ethers.providers.Web3Provider(window.ethereum);
}
const {
      FACTORY_ADDRESS,
      CETHER_ADDRESS,
      CDAI_ADDRESS,
      DAI_ADDRESS,
      WETH_ADDRESS,
      COMPTROLLER_ADDRESS,
      SWAP_ROUTER_ADDRESS,
      ETHUSD_PRICEFEED_ADDRESS,
      DAIUSD_PRICEFEED_ADDRESS,
} = KOVAN_CONSTANTS;

// helper functions
const getFactoryContract = async () => {
      const owner = new Wallet(process.env.NEXT_PUBLIC_OWNER_PRIVATE_KEY!!, provider);
      const factoryContract = new Contract(FACTORY_ADDRESS, FactoryABI, owner);
      return factoryContract;
};

const getDAITokenContract = async () => {
      const userSigner = provider.getSigner();
      const daiTokenContract = new Contract(DAI_ADDRESS, ERC20ABI, userSigner);
      return daiTokenContract;
};

const getUserETHbalance = async (userAddress: string) => {
      const userBalance = await provider.getBalance(userAddress);
      return parseFloat(ethers.utils.formatEther(userBalance)).toFixed(4);
};

// user interactive functions
const queryUserPosition = async () => {
      const userSigner = provider.getSigner();

      const factoryContract = await getFactoryContract();
      const userETHLeverageContractAddress = await factoryContract
            .connect(userSigner)
            .getUserETHLeverageAddress(userSigner.getAddress());

      const ethLeverageContract = new Contract(
            userETHLeverageContractAddress,
            ETHLeverageABI,
            userSigner,
      );
      try {
            const { ethDepositAmount, daiBorrowedAmount, leverageLevel, ethDaiRate } =
                  await ethLeverageContract.connect(userSigner).callStatic.queryPosition();
            const ttlETH = ethDepositAmount.add(ethDepositAmount.mul(leverageLevel).div(100000));
            const currentHolding = ttlETH.mul(ethDaiRate);
            const capital = ethDepositAmount.mul(ethDaiRate).add(daiBorrowedAmount);
            const pnl = currentHolding.sub(capital);

            return { ethDepositAmount, daiBorrowedAmount, leverageLevel, ethDaiRate, ttlETH, pnl };
      } catch (error) {
            return {
                  ethDepositAmount: '-',
                  daiBorrowedAmount: '-',
                  ttlETH: '-',
                  leverageLevel: '-',
                  ethDaiRate: '-',
                  pnl: '-',
            };
      }
};

const openUserPosition = async (userLeverageAmount: string) => {
      const userSigner = provider.getSigner();
      console.log('signer address', await userSigner.getAddress());

      const factoryContract = await getFactoryContract();
      const userETHLeverageContractAddress = await factoryContract
            .connect(userSigner)
            .getUserETHLeverageAddress(userSigner.getAddress());
      console.log(userETHLeverageContractAddress);

      let ethLeverageContract: Contract;
      if (userETHLeverageContractAddress === constants.AddressZero) {
            const abiCoder = new ethers.utils.AbiCoder();
            const userAddress = await userSigner.getAddress();

            const encodedParams = abiCoder
                  .encode(
                        [
                              'address',
                              'address',
                              'address',
                              'address',
                              'address',
                              'address',
                              'address',
                              'address',
                              'address',
                        ],
                        [
                              userAddress,
                              CETHER_ADDRESS,
                              CDAI_ADDRESS,
                              DAI_ADDRESS,
                              WETH_ADDRESS,
                              COMPTROLLER_ADDRESS,
                              SWAP_ROUTER_ADDRESS,
                              ETHUSD_PRICEFEED_ADDRESS,
                              DAIUSD_PRICEFEED_ADDRESS,
                        ],
                  )
                  .slice(2);
            const constructorByteCode = `${ETHLeverageByteCode}${encodedParams}`;
            const deployTransaction: ContractTransaction = await factoryContract.deploy(
                  0,
                  ethers.utils.solidityKeccak256(['string'], ['scb10x']),
                  constructorByteCode,
            );
            const receipt: ContractReceipt = await deployTransaction.wait();
            const eventData = receipt.events?.find((events) => events.event == 'DeployedAddress');
            console.log(eventData?.args?._deployedAddress);
            await factoryContract.setAddressRecord(userAddress, eventData?.args?._deployedAddress);

            ethLeverageContract = new Contract(
                  eventData?.args?._deployedAddress,
                  ETHLeverageABI,
                  userSigner,
            );
            const openPosition = await ethLeverageContract
                  .connect(userSigner)
                  .openPosition(130 * 1000, {
                        value: ethers.utils.parseEther(userLeverageAmount),
                  });

            await openPosition.wait();
      } else {
            ethLeverageContract = new Contract(
                  userETHLeverageContractAddress,
                  ETHLeverageABI,
                  userSigner,
            );
            const openPosition = await ethLeverageContract
                  .connect(userSigner)
                  .openPosition(130 * 1000, {
                        value: ethers.utils.parseEther(userLeverageAmount),
                  });

            await openPosition.wait();
      }
};

const closeUserPosition = async () => {
      const userSigner = provider.getSigner();
      const factoryContract = await getFactoryContract();
      const userETHLeverageContractAddress = await factoryContract
            .connect(userSigner)
            .getUserETHLeverageAddress(userSigner.getAddress());
      console.log('this user is going to close his position:', userETHLeverageContractAddress);

      const daiTokenContract = await getDAITokenContract();
      const userAllowance = await daiTokenContract
            .connect(userSigner)
            .allowance(userSigner.getAddress(), userETHLeverageContractAddress);
      if (userAllowance.eq(0)) {
            try {
                  await daiTokenContract
                        .connect(userSigner)
                        .approve(
                              userETHLeverageContractAddress,
                              ethers.BigNumber.from(
                                    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                              ),
                        );
            } catch (error: any) {
                  if (error.code === 4001) {
                        return;
                  }
            }
      }
      const ethLeverageContract = new Contract(
            userETHLeverageContractAddress,
            ETHLeverageABI,
            userSigner,
      );

      try {
            const closePosition = await ethLeverageContract.connect(userSigner).closePosition();
            await closePosition.wait();
      } catch (error: any) {
            if (error.code === 4001) {
                  return;
            }
      }
};

export { getUserETHbalance, queryUserPosition, openUserPosition, closeUserPosition };
