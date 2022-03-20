import React from 'react';
import MainPaper from '@elements/Papers/MainPaper';
import PositionDetails from '@elements/Displays/PositionDetails';
import Divider from '@elements/Divider';
import { RedRoundButton } from '@elements/Buttons/RoundButton';

const CloseLeverage: React.FC = () => {
      return (
            <MainPaper>
                  <div className="text-heading font-bold">My Position</div>
                  <PositionDetails label="Deposit Amount" data="1 ETH" />
                  <PositionDetails label="Borrow Amount" data="300 DAI" />
                  <Divider />
                  <PositionDetails label="Total ETH" data="1.3 ETH" />
                  <PositionDetails label="Current ETH Price" data="1,100 DAI" />
                  <PositionDetails label="PNL" data="30 DAI" />
                  <RedRoundButton>
                        <div className="font-semibold">Close Position</div>
                  </RedRoundButton>
            </MainPaper>
      );
};

export default CloseLeverage;
