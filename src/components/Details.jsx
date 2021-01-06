import React, { useState } from 'react';
import Profile from './Profile';

const sections = ['Profile', 'Resume', 'Social Profiles'];

const Details = () => {
  const [active, setActive] = useState(sections[0]);

  return (
    <>
      <div className="flex flex-row w-full">
        {sections.map((section) => (
          <button
            key={section}
            type="submit"
            className=" bg-button hover:bg-blue-900 text-white text-left px-2 font-monse text-xs font-bold w-28 h-8 focus:outline-none focus:bg-rowTable hover:rounded md:w-32 md:h-8"
          >
            {section}
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        <Profile />
      </div>
    </>
  );
};

export default Details;
