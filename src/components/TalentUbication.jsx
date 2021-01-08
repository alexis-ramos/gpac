import React from 'react';

const TalentUbication = () => (
  <div className="flex flex-row hover:bg-hoverData p-4 w-full font-roboto text-base">
    <div className="flex flex-row w-1/2">
      <div className="flex flex-col">
        <p>Company</p>
        <p className=" font-bold text-lg">Aurora Coding</p>
        <p>Development</p>
      </div>
    </div>
    <div className="flex flex-row flex-wrap justify-end text-right w-1/2">
      <p>
        Kearny, NY
        <br />
        54789
        <br />
        (123) 456 78 90
      </p>
    </div>
  </div>
);

export default TalentUbication;
