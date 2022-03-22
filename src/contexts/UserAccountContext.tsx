import { createContext, useCallback, useState } from 'react';
import { getUserETHbalance, queryUserPosition } from '@contracts/methods';
import { userCurrentPositionInfo } from '@interfaces/index';
import { ethers } from 'ethers';

interface Props {
      children: React.ReactNode;
}

const UserAccountContext = createContext(
      {} as {
            currentAccount: string | null;
            userBalance: string;
            userCurrentPositionInfo: userCurrentPositionInfo;
            userLeverageAmount: string;
            setCurrentAccount: (newCurrentAccount: string | null) => void;
            getCurrentUserETHBalance: () => Promise<void>;
            setUserCurrentPositionInfo: (
                  newUserCurrentPositionInfo: userCurrentPositionInfo,
            ) => void;
            getCurrentUserQueryPosition: () => Promise<void>;
            setUserLeverageAmount: (newAmount: string) => void;
      },
);

const UserAccountContextProvider = (props: Props) => {
      const [currentAccount, setCurrentAccount] = useState<string | null>(null);
      const [userBalance, setUserBalance] = useState<string>('0.0000');
      const [userLeverageAmount, setUserLeverageAmount] = useState<string>('');
      const [userCurrentPositionInfo, setUserCurrentPositionInfo] =
            useState<userCurrentPositionInfo>({
                  ethDepositAmount: '-',
                  daiBorrowedAmount: '-',
                  ttlETH: '-',
                  leverageLevel: '-',
                  ethDaiRate: '-',
                  pnl: '-',
            });

      const getCurrentUserETHBalance = async () => {
            if (currentAccount) {
                  const currentUserBalance = await getUserETHbalance(currentAccount);
                  console.log(currentUserBalance);
                  setUserBalance(currentUserBalance);
            }
      };
      const getCurrentUserQueryPosition = useCallback(async () => {
            const { ethDepositAmount, daiBorrowedAmount, leverageLevel, ethDaiRate, ttlETH, pnl } =
                  await queryUserPosition();
            if (ethDepositAmount === '-') {
                  setUserCurrentPositionInfo({
                        ethDepositAmount,
                        daiBorrowedAmount,
                        ttlETH,
                        leverageLevel,
                        ethDaiRate,
                        pnl,
                  });
            } else {
                  setUserCurrentPositionInfo({
                        ethDepositAmount: parseFloat(
                              ethers.utils.formatEther(ethDepositAmount),
                        ).toFixed(4),
                        daiBorrowedAmount: parseFloat(
                              ethers.utils.formatEther(daiBorrowedAmount),
                        ).toFixed(4),
                        ttlETH: parseFloat(ethers.utils.formatEther(ttlETH)).toFixed(4),
                        leverageLevel,
                        ethDaiRate,
                        pnl: parseFloat(ethers.utils.formatEther(pnl)).toFixed(4),
                  });
            }
      }, [currentAccount]);

      const value = {
            currentAccount,
            userBalance,
            userCurrentPositionInfo,
            userLeverageAmount,
            setCurrentAccount,
            getCurrentUserETHBalance,
            setUserCurrentPositionInfo,
            getCurrentUserQueryPosition,
            setUserLeverageAmount,
      };

      return <UserAccountContext.Provider value={value} {...props} />;
};

export { UserAccountContextProvider };
export default UserAccountContext;
