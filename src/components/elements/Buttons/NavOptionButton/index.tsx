import React from 'react';

interface IProps {
      children: React.ReactNode;
}
const NavOptionButton: React.FC<IProps> = ({ children }) => {
      return (
            <button className="bg-blue-button font-bold text-white py-2 px-4 rounded-xl">
                  {children}
            </button>
      );
};

export default NavOptionButton;
