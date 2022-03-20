import React from 'react';

interface IProps {
      children: React.ReactNode;
      onClick: () => void;
      showSelected: boolean;
}
const NavOptionButton: React.FC<IProps> = ({
      children,
      onClick,
      showSelected,
}) => {
      return (
            <button
                  className={`${
                        showSelected && 'bg-blue-button'
                  } font-bold text-white py-2 px-4 rounded-xl text-regular`}
                  onClick={onClick}
            >
                  {children}
            </button>
      );
};

export default NavOptionButton;
