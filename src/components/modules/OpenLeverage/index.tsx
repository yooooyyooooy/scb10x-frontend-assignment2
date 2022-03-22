import React, { useEffect, useContext } from 'react';
import MainPaper from '@elements/Papers/MainPaper';
import LeverageInput from '@modules/LeverageInput';
import { BlueRoundButton } from '@elements/Buttons/RoundButton';
import { openUserPosition } from '@contracts/methods';

const OpenLeverage: React.FC = () => {
      return (
            <MainPaper>
                  <div className="text-heading font-bold">Leverage</div>
                  <LeverageInput />
                  <BlueRoundButton onClick={openUserPosition}>
                        <div className="font-semibold">Leverage</div>
                  </BlueRoundButton>
            </MainPaper>
      );
};

export default OpenLeverage;
