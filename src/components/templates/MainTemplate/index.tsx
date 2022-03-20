import React from 'react';

interface IProps {
      children: React.ReactNode;
}
const MainTemplate: React.FC<IProps> = ({ children }) => {
      return <div className=" flex-auto flex justify-center items-center">{children}</div>;
};

export default MainTemplate;
