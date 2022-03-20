import React from 'react';

interface IProps {
      label: string;
      data: string;
}
const PositionDetails: React.FC<IProps> = ({ label, data }) => {
      return (
            <div className=" flex justify-between">
                  <div className="text-small">{label}</div>
                  <div className="text-regular text-blue-font font-semibold">
                        {data}
                  </div>
            </div>
      );
};

export default PositionDetails;
