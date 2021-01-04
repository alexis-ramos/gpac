import React from 'react';
import Footer from './Footer';
import SideNav from './SideNav';

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen justify-between">
    <SideNav />
    {children}
    <Footer />
  </div>
);

export default Layout;
