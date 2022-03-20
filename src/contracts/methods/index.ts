import { ethers } from 'ethers';

let provider: ethers.providers.Web3Provider;
if (typeof window !== 'undefined') {
      provider = new ethers.providers.Web3Provider(window.ethereum);
}

const getUserETHbalance = async (userAddress: string) => {
      const userBalance = await provider.getBalance(userAddress);
      return parseFloat(ethers.utils.formatEther(userBalance)).toFixed(2);
};

export { getUserETHbalance };
