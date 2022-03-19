import React from 'react';

interface IProps {
      children: React.ReactNode;
}
const RoundButton: React.FC<IProps> = ({ children }) => {
      return (
            <button className="bg-blue-button font-bold text-white text-regular py-3 px-4 rounded-full">
                  {children}
            </button>
      );
};

export default RoundButton;
