import React from 'react';
import MainPaper from '@elements/Papers/MainPaper';
import LeverageInput from '@modules/LeverageInput';
import { BlueRoundButton } from '@elements/Buttons/RoundButton';

const OpenLeverage: React.FC = () => {
      return (
            <MainPaper>
                  <div className="text-heading font-bold">Leverage</div>
                  <LeverageInput />
                  <BlueRoundButton>
                        <div className="font-semibold">Leverage</div>
                  </BlueRoundButton>
            </MainPaper>
      );
};

export default OpenLeverage;
