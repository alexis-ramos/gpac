import React from 'react';
import ListTalentCard from './ListTalentCard';
import ListTalentRowDetail from './ListTalentRowDetail';

const ListTalent = () => (
  <div className="flex flex-col w-full items-center">
    <div className="flex flex-col w-9/12 rounded-lg bg-rowTable mb-7 md:hidden lg:hidden xl:hidden">
      <ListTalentCard />
    </div>
    <div className="flex flex-col w-9/12 rounded-lg bg-rowTable mb-7 md:hidden lg:hidden xl:hidden">
      <ListTalentCard />
    </div>
    <div className="flex flex-col w-9/12 rounded-lg bg-rowTable mb-7 md:hidden lg:hidden xl:hidden">
      <ListTalentCard />
    </div>
    <div className="hidden md:flex md:flex-col lg:flex lg:flex-col">
      <table className="table-fixed w-full">
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
          <ListTalentRowDetail />
          <ListTalentRowDetail />
          <ListTalentRowDetail />
          <ListTalentRowDetail />
        </tbody>
      </table>
    </div>
  </div>
);

export default ListTalent;
