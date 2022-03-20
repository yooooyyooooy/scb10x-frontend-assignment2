import { createContext, useState } from 'react';
import { getUserETHbalance } from '@contracts/methods';
interface Props {
      children: React.ReactNode;
}

const UserAccountContext = createContext(
      {} as {
            currentAccount: string | null;
            userBalance: string;
            setCurrentAccount: (newCurrentAccount: string | null) => void;
            getCurrentUserETHBalance: () => void;
      },
);

export const UserAccountContextProvider = (props: Props) => {
      const [currentAccount, setCurrentAccount] = useState<string | null>(null);
      const [userBalance, setUserBalance] = useState<string>('0.00');

      const getCurrentUserETHBalance = async () => {
            if (currentAccount) {
                  const currentUserBalance = await getUserETHbalance(currentAccount);
                  setUserBalance(currentUserBalance);
            }
      };
      const value = {
            currentAccount,
            userBalance,
            setCurrentAccount,
            getCurrentUserETHBalance,
      };

      return <UserAccountContext.Provider value={value} {...props} />;
};

export default UserAccountContext;
