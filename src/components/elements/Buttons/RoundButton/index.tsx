import React from 'react';

interface IProps {
      children: React.ReactNode;
      onClick?: () => void;
}
const BlueRoundButton: React.FC<IProps> = ({ children, onClick }) => {
      return (
            <button
                  className="bg-blue-button font-bold text-white text-regular py-3 px-4 rounded-full w-full"
                  onClick={onClick}
            >
                  {children}
            </button>
      );
};
const RedRoundButton: React.FC<IProps> = ({ children, onClick }) => {
      return (
            <button
                  className="bg-red font-bold text-white text-regular py-3 px-4 rounded-full w-full"
                  onClick={onClick}
            >
                  {children}
            </button>
      );
};

export { BlueRoundButton, RedRoundButton };
