import React from 'react';
import Header from './Header';
import Header_test from './Header_test';

const AppLayout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      {/* <Header_test/> */}
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
