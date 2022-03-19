import { ChildProcess } from 'child_process';
import React from 'react';

interface IProps {
      children: React.ReactNode;
}
const NavMenuPaper: React.FC<IProps> = ({ children }) => {
      return (
            <div className="bg-blue-navmenu w-[500px] grid grid-cols-[1fr_1fr] p-2 gap-x-2 rounded-xl">
                  {children}
            </div>
      );
};

export default NavMenuPaper;
