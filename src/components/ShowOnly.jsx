import React from 'react';

const ShowOnly = () => (
  <div className="flex flex-col w-full justify-center">
    <div className="flex flex-row container w-full font-monse text-xs justify-between md:justify-start md:space-x-3">
      <p className="font-monse text-xs">Show only:</p>
      <div className="flex flex-row space-x-3">
        <label htmlFor="alphas" className=" inline-flex items-center">
          <input
            className="rounded border-gray-300 text-red-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="checkbox"
            name="alphas"
            id="alphas"
          />
          <span className="ml-2">Alphas</span>
        </label>
        <label htmlFor="alphas" className=" inline-flex items-center">
          <input
            className="rounded border-gray-300 text-red-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="checkbox"
            name="orders"
            id="orders"
          />
          <span className="ml-2">Job Orders</span>
        </label>
        <label htmlFor="alphas" className=" inline-flex items-center">
          <input
            className="rounded border-gray-300 text-red-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="checkbox"
            name="companies"
            id="companies"
          />
          <span className="ml-2">Companies</span>
        </label>
      </div>
    </div>
  </div>
);

export default ShowOnly;
