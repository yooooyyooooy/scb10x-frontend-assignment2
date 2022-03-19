import React from 'react';
import RoundButton from '@elements/Buttons/RoundButton';
import NavMenuPaper from '@elements/Papers/NavMenuPaper';
import NavOptionButton from '@elements/Buttons/NavOptionButton';
import HomeButton from '@elements/Buttons/HomeButton';
import { FaWallet } from 'react-icons/fa';

const NavBar: React.FC = () => {
      return (
            <nav className=" grid grid-cols-[1fr_4fr_1fr] items-center justify-items-center py-1 px-16">
                  <div className="justify-self-start">
                        <HomeButton />
                  </div>
                  <NavMenuPaper>
                        <NavOptionButton>Leverage</NavOptionButton>
                        <NavOptionButton>My Position</NavOptionButton>
                  </NavMenuPaper>
                  <div className="justify-self-end">
                        <RoundButton>
                              <div className="flex items-center space-x-3">
                                    <FaWallet className="text-smallIcon" />
                                    <div>Connect Wallet</div>
                              </div>
                        </RoundButton>
                  </div>
            </nav>
      );
};

export default NavBar;
