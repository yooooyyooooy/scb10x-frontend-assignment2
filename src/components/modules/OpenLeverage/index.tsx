import React, { useEffect, useContext } from 'react';
import MainPaper from '@elements/Papers/MainPaper';
import LeverageInput from '@modules/LeverageInput';
import { BlueRoundButton } from '@elements/Buttons/RoundButton';
import { openUserPosition } from '@contracts/methods';
import UserAccountContext from '@contexts/UserAccountContext';

const OpenLeverage: React.FC = () => {
      const { userLeverageAmount } = useContext(UserAccountContext);
      return (
            <MainPaper>
                  <div className="text-heading font-bold">Leverage</div>
                  <LeverageInput />
                  <BlueRoundButton onClick={() => openUserPosition(userLeverageAmount)}>
                        <div className="font-semibold">Leverage 1.3 X</div>
                  </BlueRoundButton>
            </MainPaper>
      );
};

export default OpenLeverage;
