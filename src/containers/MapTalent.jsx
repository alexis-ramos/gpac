import React from 'react';
import AdvanceSearch from '../components/AdvanceSearch';
import ShowOnly from '../components/ShowOnly';
import TalentMap from '../components/TalentMap';
import TalentUbication from '../components/TalentUbication';

const MapTalent = () => (
  <div className="flex flex-col w-full">
    <div className="flex flex-row w-full h-10 md:h-16 shadow-md">
      <AdvanceSearch />
    </div>
    <div className="flex flex-row w-full h-12 bg-search">
      <ShowOnly />
    </div>
    <div className=" flex flex-col w-full md:flex-row">
      <div className="w-full md:w-2/5">
        <TalentUbication />
      </div>
      <div className="w-full md:w-3/5">
        <TalentMap />
      </div>
    </div>
  </div>
);
export default MapTalent;
