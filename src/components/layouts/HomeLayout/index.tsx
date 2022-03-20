import React from 'react';
import MainTemplate from '@templates/MainTemplate';
import OpenLeverage from '@modules/OpenLeverage';

const HomeLayout = () => {
      return (
            <MainTemplate>
                  <OpenLeverage />
            </MainTemplate>
      );
};

export default HomeLayout;
