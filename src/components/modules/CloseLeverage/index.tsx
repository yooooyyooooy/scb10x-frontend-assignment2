import React, { useContext, useEffect } from 'react';
import MainPaper from '@elements/Papers/MainPaper';
import PositionDetails from '@elements/Displays/PositionDetails';
import Divider from '@elements/Divider';
import { RedRoundButton } from '@elements/Buttons/RoundButton';
import { queryUserPosition } from '@contracts/methods';
import UserAccountContext from '@contexts/UserAccountContext';

const CloseLeverage: React.FC = () => {
      const { currentAccount, userCurrentPositionInfo, getCurrentUserQueryPosition } =
            useContext(UserAccountContext);
      useEffect(() => {
            getCurrentUserQueryPosition();
      }, [getCurrentUserQueryPosition]);
      return (
            <MainPaper>
                  <div className="text-heading font-bold">My Position</div>
                  <PositionDetails
                        label="Deposit Amount"
                        data={`${userCurrentPositionInfo.ethDepositAmount} ETH`}
                  />
                  <PositionDetails
                        label="Borrow Amount"
                        data={`${userCurrentPositionInfo.daiBorrowedAmount} DAI `}
                  />
                  <Divider />
                  <PositionDetails label="Total ETH" data="1.3 ETH" />
                  <PositionDetails
                        label="Current ETH Price"
                        data={`${userCurrentPositionInfo.ethDaiRate} DAI `}
                  />
                  <PositionDetails label="PNL" data="30 DAI" />
                  <RedRoundButton>
                        <div className="font-semibold">Close Position</div>
                  </RedRoundButton>
            </MainPaper>
      );
};

export default CloseLeverage;
