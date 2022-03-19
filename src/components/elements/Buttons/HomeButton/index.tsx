import React from 'react';
import { FaRocket } from 'react-icons/fa';

const HomeButton: React.FC = () => {
      return (
            <button className="flex  items-center space-x-2 text-white font-bold">
                  <FaRocket className=" text-bigIcon" />
                  <div className="text-regular">Dev10X</div>
            </button>
      );
};

export default HomeButton;
