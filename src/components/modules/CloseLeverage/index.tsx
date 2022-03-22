import React, { useContext, useEffect } from 'react';
import MainPaper from '@elements/Papers/MainPaper';
import PositionDetails from '@elements/Displays/PositionDetails';
import Divider from '@elements/Divider';
import { RedRoundButton } from '@elements/Buttons/RoundButton';
import UserAccountContext from '@contexts/UserAccountContext';
import { closeUserPosition } from '@contracts/methods';

const CloseLeverage: React.FC = () => {
      const { userCurrentPositionInfo, getCurrentUserQueryPosition } =
            useContext(UserAccountContext);
      useEffect(() => {
            getCurrentUserQueryPosition();
      }, [getCurrentUserQueryPosition]);

      const updateInfoAfterClosePosition = async () => {
            try {
                  await closeUserPosition();
            } catch (error) {
                  console.log(error);
            } finally {
                  await getCurrentUserQueryPosition();
            }
      };
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
                  <PositionDetails
                        label="Total ETH"
                        data={`${userCurrentPositionInfo.ttlETH} ETH`}
                  />
                  <PositionDetails
                        label="Current ETH Price"
                        data={`${userCurrentPositionInfo.ethDaiRate} DAI `}
                  />
                  <PositionDetails label="PNL" data={`${userCurrentPositionInfo.pnl} DAI `} />
                  <RedRoundButton onClick={updateInfoAfterClosePosition}>
                        <div className="font-semibold">Close Position</div>
                  </RedRoundButton>
            </MainPaper>
      );
};

export default CloseLeverage;
