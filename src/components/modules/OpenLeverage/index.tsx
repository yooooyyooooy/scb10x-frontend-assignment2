import React from 'react';
import MainPaper from '@elements/Papers/MainPaper';
import LeverageInput from '@modules/LeverageInput';
import RoundButton from '@elements/Buttons/RoundButton';

const OpenLeverage: React.FC = () => {
      return (
            <MainPaper>
                  <div className="text-heading font-bold">Leverage</div>
                  <LeverageInput />
                  <RoundButton>
                        <div className="font-semibold">Leverage</div>
                  </RoundButton>
            </MainPaper>
      );
};

export default OpenLeverage;
