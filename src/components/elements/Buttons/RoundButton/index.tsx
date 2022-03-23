import React from 'react';

interface IProps {
      children: React.ReactNode;
      onClick?: () => void;
      isDisabled?: boolean;
}
const BlueRoundButton: React.FC<IProps> = ({ children, onClick, isDisabled }) => {
      return (
            <button
                  className="bg-blue-button font-bold text-white text-regular py-3 px-4 rounded-full w-full disabled:bg-gray-disabled"
                  onClick={onClick}
                  disabled={isDisabled}
            >
                  {children}
            </button>
      );
};
const RedRoundButton: React.FC<IProps> = ({ children, onClick, isDisabled }) => {
      return (
            <button
                  className="bg-red font-bold text-white text-regular py-3 px-4 rounded-full w-full disabled:bg-gray-disabled"
                  onClick={onClick}
                  disabled={isDisabled}
            >
                  {children}
            </button>
      );
};

export { BlueRoundButton, RedRoundButton };
