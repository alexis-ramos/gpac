import React from 'react';

const SideNav = () => {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/register'
  ) {
    return null;
  }
  return (
    <div>
      <h1>sidenav</h1>
    </div>
  );
};

export default SideNav;
