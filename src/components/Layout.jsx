import React from 'react';
import Footer from './Footer';
import SideNav from './SideNav';

const Layout = ({ children }) => (
  <div>
    <SideNav />
    {children}
    <Footer />
  </div>
);

export default Layout;
