import React from 'react';
import RoundButton from '@elements/Buttons/RoundButton';
import NavMenuPaper from '@elements/Papers/NavMenuPaper';
import NavOptionButton from '@elements/Buttons/NavOptionButton';

const NavBar: React.FC = () => {
      return (
            <nav className="bg-test grid grid-cols-[1fr_4fr_1fr] items-center justify-items-center py-1">
                  <div>test</div>
                  <NavMenuPaper>
                        <NavOptionButton>Leverage</NavOptionButton>
                        <NavOptionButton>My Position</NavOptionButton>
                  </NavMenuPaper>
                  <RoundButton>Connect Wallet</RoundButton>
            </nav>
      );
};

export default NavBar;
