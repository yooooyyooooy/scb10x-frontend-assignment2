import React from 'react';

const LeverageInput: React.FC = () => {
      return (
            <div className="space-y-2 ">
                  <div className="text-small font-medium">Balance: 1.00 ETH</div>
                  <div className="flex w-full bg-white rounded-lg p-3 ">
                        <input
                              className="w-full rounded-lg text-dark text-regular focus:outline-none"
                              placeholder="0.00"
                              type="text"
                        />
                        <button className="text-blue-font text-regular font-semibold">MAX</button>
                  </div>
            </div>
      );
};
export default LeverageInput;
