import { createContext, useState } from 'react';

interface Props {
      children: React.ReactNode;
}

const UserAccountContext = createContext(
      {} as {
            currentAccount: string | null;
            setCurrentAccount: (newCurrentAccount: string | null) => void;
      },
);

export const UserAccountContextProvider = (props: Props) => {
      const [currentAccount, setCurrentAccount] = useState<string | null>(null);
      const value = {
            currentAccount,
            setCurrentAccount,
      };

      return <UserAccountContext.Provider value={value} {...props} />;
};

export default UserAccountContext;
