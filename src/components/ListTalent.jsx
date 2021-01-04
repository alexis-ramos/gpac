import React from 'react';

const ListTalent = () => (
  <div className="flex flex-col w-full">
    <div className="flex flex-col w-full space-y-5 rounded-lg bg-rowTable md:hidden lg:hidden xl:hidden">
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
    <div className="hidden md:flex md:flex-col lg:flex lg:flex-col">
      <table className="table-fixed w-full ">
        <thead>
          <tr className="tracking-wide text-left ">
            <th className="font-normal font-roboto tracking-wide text-xs ">
              {' '}
            </th>
            <th className="font-normal font-roboto tracking-wide text-xs w-1/5">
              Name
            </th>
            <th className="font-normal font-roboto tracking-wide text-xs">
              Industry
            </th>
            <th className="font-normal font-roboto tracking-wide text-xs ">
              Job Position
            </th>
            <th className="font-normal font-roboto tracking-wide text-xs w-1/6 ">
              Phone
            </th>
            <th className="font-normal font-roboto tracking-wide text-xs ">
              Salary
            </th>
            <th className="font-normal font-roboto tracking-wide text-xs text-center ">
              Location
            </th>
            <th className="font-normal font-roboto tracking-wide text-xs"> </th>
          </tr>
        </thead>
        <tbody className="h-16 w-full">
          <tr className="bg-rowTable text-left">
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
            <td className="font-roboto text-xs font-light text-gray-500">
              $80k
            </td>
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
        </tbody>
      </table>
    </div>
  </div>
);

export default ListTalent;
