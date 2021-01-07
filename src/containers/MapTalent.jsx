import React from 'react';
import AdvanceSearch from '../components/AdvanceSearch';
import ShowOnly from '../components/ShowOnly';

const MapTalent = () => (
  <div className="flex flex-col w-full">
    <div className="flex flex-row w-full h-10 md:h-16 shadow-md">
      <AdvanceSearch />
    </div>
    <div className="flex flex-row w-full h-12 bg-search">
      <ShowOnly />
    </div>
    <div className=" md:flex md:flex-row">
      <h1>ubicaciones</h1>
      <h1>Map</h1>
    </div>
  </div>
);
export default MapTalent;
