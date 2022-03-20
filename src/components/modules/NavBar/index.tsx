import React, { useEffect, useState } from 'react';
import NavMenuPaper from '@elements/Papers/NavMenuPaper';
import NavOptionButton from '@elements/Buttons/NavOptionButton';
import HomeButton from '@elements/Buttons/HomeButton';
import { FaWallet } from 'react-icons/fa';
import { BlueRoundButton } from '@elements/Buttons/RoundButton';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
const NavBar: React.FC = () => {
      const [currentAccount, setCurrentAccount] = useState<string | null>(null);
      const router = useRouter();
      const toPositionPage = () => {
            router.push('/position');
      };
      const toHomePage = () => {
            router.push('/');
      };

      const connectWalletHandler = async () => {
            const { ethereum } = window;
            if (ethereum) {
                  try {
                        const userAccount = await ethereum.request({
                              method: 'eth_requestAccounts',
                        });
                        setCurrentAccount(userAccount[0]);
                  } catch (error: any) {
                        if (error.code === 4001) {
                              console.log('Please connect to MetaMask.');
                        } else {
                              console.log(error);
                        }
                  }
            } else {
                  console.log('Please install Metamask');
            }
      };
      useEffect(() => {
            const { ethereum } = window;
            ethereum.on('accountsChanged', (accounts: string[]) => {
                  if (currentAccount && accounts.length !== 0)
                        setCurrentAccount(accounts[0]);
            });
      });

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
                        <BlueRoundButton onClick={connectWalletHandler}>
                              <div className="flex items-center space-x-3">
                                    <FaWallet className="text-smallIcon" />
                                    {!currentAccount && (
                                          <div>Connect Wallet</div>
                                    )}
                                    {currentAccount && (
                                          <div>
                                                {`${currentAccount.slice(
                                                      0,
                                                      5,
                                                )}...${currentAccount.slice(
                                                      -2,
                                                )}`}
                                          </div>
                                    )}
                              </div>
                        </BlueRoundButton>
                  </div>
            </nav>
      );
};

export default NavBar;
