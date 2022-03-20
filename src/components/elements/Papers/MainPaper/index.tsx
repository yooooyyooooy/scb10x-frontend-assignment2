import React from 'react';

interface IProps {
      children: React.ReactNode;
}
const MainPaper: React.FC<IProps> = ({ children }) => {
      return (
            <div className="bg-opacity-30 bg-dark w-[500px] text-white p-8 rounded-xl space-y-6">
                  {children}
            </div>
      );
};

export default MainPaper;
