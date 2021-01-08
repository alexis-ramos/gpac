import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';

const Back = () => {
  return window.location.pathname === '/register' ? (
    <div className="flex flex-row w-full h-16 bg-search">
      <Link to="/" className="flex flex-row items-center">
        <RiArrowLeftSLine color="red" className="w-12 h-10" />
        <p className="font-monse font-bold">Back</p>
      </Link>
    </div>
  ) : (
    <div className="flex flex-row w-full h-16 bg-search">
      <Link to="/market" className="flex flex-row items-center">
        <RiArrowLeftSLine color="red" className="w-12 h-10" />
        <p className="font-monse font-bold">Back</p>
      </Link>
    </div>
  );
};

export default Back;
