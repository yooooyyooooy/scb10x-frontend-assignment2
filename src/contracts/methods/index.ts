import { ethers, Wallet, Contract } from 'ethers';
import ETHLeverageABI from '@contracts/abis/ETHLeverageABI';
import FactoryABI from '@contracts/abis/FactoryABI';
import KOVAN_CONSTANTS from '@contracts/constants';
import UserAccountContext from '@contexts/UserAccountContext';

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
      // console.log(result);

      const ethLeverageContract = new Contract(
            userETHLeverageContractAddress,
            ETHLeverageABI,
            userSigner,
      );
      try {
            const results = await ethLeverageContract
                  .connect(userSigner)
                  .callStatic.queryPosition();
            return results;
      } catch (error) {
            return {
                  ethDepositAmount: '-',
                  daiBorrowedAmount: '-',
                  leverageLevel: '-',
                  ethDaiRate: '-',
            };
      }

      // console.log(ethLeverageContract.address);
};

export { getUserETHbalance, queryUserPosition };
