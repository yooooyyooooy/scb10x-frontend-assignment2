import { ethers, Wallet, Contract, constants } from 'ethers';
import ETHLeverageABI from '@contracts/abis/ETHLeverageABI';
import FactoryABI from '@contracts/abis/FactoryABI';
import KOVAN_CONSTANTS from '@contracts/constants';

let provider: ethers.providers.Web3Provider;
if (typeof window !== 'undefined') {
      provider = new ethers.providers.Web3Provider(window.ethereum);
}
const { FACTORY_ADDRESS } = KOVAN_CONSTANTS;

const getFactoryContract = async () => {
      const owner = new Wallet(process.env.NEXT_PUBLIC_OWNER_PRIVATE_KEY!!, provider);
      const factoryContract = new Contract(FACTORY_ADDRESS, FactoryABI, owner);
      return factoryContract;
};

const getUserETHbalance = async (userAddress: string) => {
      const userBalance = await provider.getBalance(userAddress);
      return parseFloat(ethers.utils.formatEther(userBalance)).toFixed(2);
};

const queryUserPosition = async () => {
      const userSigner = provider.getSigner();
      console.log('func query', await userSigner.getAddress());

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
            console.log(ethers.utils.formatEther(ttlETH));

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

const openUserPosition = async () => {
      const userSigner = provider.getSigner();
      console.log('func query', await userSigner.getAddress());

      const factoryContract = await getFactoryContract();
      const userETHLeverageContractAddress = await factoryContract
            .connect(userSigner)
            .getUserETHLeverageAddress(userSigner.getAddress());
      console.log(userETHLeverageContractAddress);

      let ethLeverageContract: Contract;
      if (userETHLeverageContractAddress === constants.AddressZero) {
            console.log('To be done later');
      } else {
            ethLeverageContract = new Contract(
                  userETHLeverageContractAddress,
                  ETHLeverageABI,
                  userSigner,
            );
            await ethLeverageContract.connect(userSigner).openPosition(130 * 1000, {
                  value: ethers.utils.parseEther('0.001'),
            });
      }
};

export { getUserETHbalance, queryUserPosition, openUserPosition };
