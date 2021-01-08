import React from 'react';

const ListTalenRowDetail = () => (
  <tr className="bg-rowTable text-left w-full">
    <td>
      <img
        className=" w-14 h-14 rounded-full"
        src="https://picsum.photos/id/237/200/300"
        alt="imgProfile"
      />
    </td>

    <td className="flex flex-col py-4">
      <p className="font-roboto font-bold ">Anthony González</p>
      <p className="font-roboto text-xs font-light text-gray-500">
        Construction Manager
      </p>
    </td>
    <td className="font-roboto text-xs font-light text-gray-500">
      <p>Construction</p>
    </td>
    <td className="font-roboto text-xs font-light text-gray-500">
      <p>Project Manager</p>
    </td>
    <td className="font-roboto text-xs font-light text-gray-500">
      +01 673 1234 56 78
    </td>
    <td className="font-roboto text-xs font-light text-gray-500">$80k</td>
    <td className="font-roboto text-center text-xs font-light text-gray-500">
      NJ
    </td>
    <td>
      <button
        type="button"
        className="inline-block md:w-20 text-xs font-medium leading-6 text-center text-white transition bg-transparent border-2 border-gray-400 hover:bg-gray-500  ripple focus:outline-none"
      >
        View Profile
      </button>
    </td>
  </tr>
);
export default ListTalenRowDetail;
