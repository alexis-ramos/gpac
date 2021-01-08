import React from 'react';

const ListTalentCard = () => (
  <div className="flex flex-col space-y-2">
    <div className="flex flex-row p-4 justify-center">
      <img
        className=" w-20 h-20 rounded-full"
        src="https://picsum.photos/id/237/200/300"
        alt="imgProfile"
      />
    </div>
    <div className="flex flex-col items-center">
      <h3 className="font-roboto font-bold">Anthony </h3>
      <p className="font-roboto text-xs font-light text-gray-500">González</p>
    </div>
    <div className="flex flex-row justify-center">
      <h3 className="font-roboto text-xs font-light text-gray-500">
        Construction
      </h3>
    </div>
    <div className="flex flex-row justify-center">
      <h3 className="font-roboto text-xs font-light text-gray-500">
        Project Manager
      </h3>
    </div>
    <div className="flex flex-row justify-center">
      <h3 className="font-roboto text-xs font-light text-gray-500">
        +01 673 1234 56 78
      </h3>
    </div>
    <div className="flex flex-row justify-center">
      <h3 className="font-roboto text-xs font-light text-gray-500">$80k</h3>
    </div>
    <div className="flex flex-row justify-center">
      <h3 className="font-roboto text-xs font-light text-gray-500">NJ</h3>
    </div>
    <div className="flex flex-row pb-4 justify-center">
      <button
        type="button"
        className="inline-block w-32 text-xs font-medium leading-6 text-center text-white transition bg-transparent border-2 border-gray-400 hover:bg-gray-500  ripple focus:outline-none"
      >
        View Profile
      </button>
    </div>
  </div>
);

export default ListTalentCard;
