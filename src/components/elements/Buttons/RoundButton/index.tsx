import React from 'react';

interface IProps {
      children: React.ReactNode;
}
const BlueRoundButton: React.FC<IProps> = ({ children }) => {
      return (
            <button className="bg-blue-button font-bold text-white text-regular py-3 px-4 rounded-full w-full">
                  {children}
            </button>
      );
};
const RedRoundButton: React.FC<IProps> = ({ children }) => {
      return (
            <button className="bg-red font-bold text-white text-regular py-3 px-4 rounded-full w-full">
                  {children}
            </button>
      );
};

export { BlueRoundButton, RedRoundButton };
