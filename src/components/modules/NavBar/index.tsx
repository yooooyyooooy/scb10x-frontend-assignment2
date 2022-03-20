import React from 'react';
import NavMenuPaper from '@elements/Papers/NavMenuPaper';
import NavOptionButton from '@elements/Buttons/NavOptionButton';
import HomeButton from '@elements/Buttons/HomeButton';
import { FaWallet } from 'react-icons/fa';
import { BlueRoundButton } from '@elements/Buttons/RoundButton';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
      const router = useRouter();
      const toPositionPage = () => {
            router.push('/position');
      };
      const toHomePage = () => {
            router.push('/');
      };

      return (
            <nav className=" grid grid-cols-[1fr_4fr_1fr] items-center justify-items-center py-2 px-20">
                  <div className="justify-self-start">
                        <HomeButton />
                  </div>
                  <NavMenuPaper>
                        <NavOptionButton
                              onClick={toHomePage}
                              showSelected={router.pathname === '/'}
                        >
                              Leverage
                        </NavOptionButton>
                        <NavOptionButton
                              onClick={toPositionPage}
                              showSelected={router.pathname === '/position'}
                        >
                              My Position
                        </NavOptionButton>
                  </NavMenuPaper>
                  <div className="justify-self-end">
                        <BlueRoundButton>
                              <div className="flex items-center space-x-3">
                                    <FaWallet className="text-smallIcon" />
                                    <div>Connect Wallet</div>
                              </div>
                        </BlueRoundButton>
                  </div>
            </nav>
      );
};

export default NavBar;
