import { createContext, useCallback, useState } from 'react';
import { getUserETHbalance, queryUserPosition } from '@contracts/methods';
import { userCurrentPositionInfo } from '@interfaces/index';
import { createSecureServer } from 'http2';

interface Props {
      children: React.ReactNode;
}

const UserAccountContext = createContext(
      {} as {
            currentAccount: string | null;
            userBalance: string;
            userCurrentPositionInfo: userCurrentPositionInfo;
            setCurrentAccount: (newCurrentAccount: string | null) => void;
            getCurrentUserETHBalance: () => Promise<void>;
            setUserCurrentPositionInfo: (
                  newUserCurrentPositionInfo: userCurrentPositionInfo,
            ) => void;
            getCurrentUserQueryPosition: () => Promise<void>;
      },
);

const UserAccountContextProvider = (props: Props) => {
      const [currentAccount, setCurrentAccount] = useState<string | null>(null);
      const [userBalance, setUserBalance] = useState<string>('0.00');
      const [userCurrentPositionInfo, setUserCurrentPositionInfo] =
            useState<userCurrentPositionInfo>({
                  ethDepositAmount: '-',
                  daiBorrowedAmount: '-',
                  leverageLevel: '-',
                  ethDaiRate: '-',
            });

      const getCurrentUserETHBalance = async () => {
            if (currentAccount) {
                  const currentUserBalance = await getUserETHbalance(currentAccount);
                  setUserBalance(currentUserBalance);
            }
      };

      const getCurrentUserQueryPosition = useCallback(async () => {
            const { ethDepositAmount, daiBorrowedAmount, leverageLevel, ethDaiRate } =
                  await queryUserPosition();
            setUserCurrentPositionInfo({
                  ethDepositAmount,
                  daiBorrowedAmount,
                  leverageLevel,
                  ethDaiRate,
            });
      }, [currentAccount]);

      const value = {
            currentAccount,
            userBalance,
            userCurrentPositionInfo,
            setCurrentAccount,
            getCurrentUserETHBalance,
            setUserCurrentPositionInfo,
            getCurrentUserQueryPosition,
      };

      return <UserAccountContext.Provider value={value} {...props} />;
};

export { UserAccountContextProvider };
export default UserAccountContext;
