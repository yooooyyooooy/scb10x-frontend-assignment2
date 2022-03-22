import React, { useContext, useEffect } from 'react';
import UserAccountContext from '@contexts/UserAccountContext';

const LeverageInput: React.FC = () => {
      const { userBalance, getCurrentUserETHBalance, userLeverageAmount, setUserLeverageAmount } =
            useContext(UserAccountContext);
      useEffect(() => {
            getCurrentUserETHBalance();
      });
      return (
            <div className="space-y-2 ">
                  <div className="text-small font-medium">{`Balance: ${userBalance} ETH`}</div>
                  <div className="flex w-full bg-white rounded-lg p-3 ">
                        <input
                              className="w-full rounded-lg text-dark text-regular focus:outline-none"
                              placeholder="0.00"
                              type="text"
                              value={userLeverageAmount}
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    setUserLeverageAmount(event.target.value)
                              }
                        />
                        <button className="text-blue-font text-regular font-semibold">MAX</button>
                  </div>
            </div>
      );
};
export default LeverageInput;
