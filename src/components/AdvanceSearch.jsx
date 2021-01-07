import React from 'react';
import { RiSearchLine } from 'react-icons/ri';

const AdvanceSearch = () => (
  <div className="flex flex-row w-full h-10 self-center px-5">
    <div className="flex flex-row w-auto bg-advanceSearch rounded-lg font-roboto">
      <div className="hidden md:flex ms:flex-row w-full divide-solid divide-x-1 divide-divider">
        <input
          className="text-xs bg-transparent border-none w-44"
          type="search"
          name="quickSearch"
          id="quickSearch"
          placeholder="Quick Search…"
        />
        <select
          name="Industry"
          id="entities"
          className=" w-44 h-full bg-transparent focus:outline-none border-none text-xs font-roboto"
        >
          <option
            value="allEntities"
            className="focus:outline-none border-none"
          >
            All Entities
          </option>
        </select>
        <select
          name="industry"
          id="industry"
          className=" w-44 h-full bg-transparent focus:outline-none border-none  text-xs font-roboto"
        >
          <option
            value="allEntities"
            className="focus:outline-none border-none"
          >
            Industry
          </option>
        </select>
        <select
          name="location"
          id="location"
          className=" w-44 h-full bg-transparent focus:outline-none border-none  text-xs font-roboto"
        >
          <option
            value="allEntities"
            className="focus:outline-none border-none"
          >
            Location
          </option>
        </select>
        <button
          type="submit"
          className="flex flex-col w-11 h-10 rounded-r-lg bg-red-600 focus:outline-none border-none justify-center items-center"
        >
          <RiSearchLine className="w-4 h-4" fill="#FFFFFF" />
        </button>
      </div>
    </div>
    <div className="flex flex-col w-full md:w-1/3 justify-center">
      <div className="flex flex-row space-x-4 justify-end">
        <p className=" font-mono text-xs "> Advance Search</p>
        <button
          type="submit"
          className="flex flex-row fill-current items-center justify-end hover:text-white focus:outline-none border-none"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="7"
              viewBox="0 0 33 7"
            >
              <g transform="translate(-1313 -26)">
                <circle
                  className="a"
                  cx="3.5"
                  cy="3.5"
                  r="3.5"
                  transform="translate(1313 33) rotate(-90)"
                />
                <circle
                  className="a"
                  cx="3.5"
                  cy="3.5"
                  r="3.5"
                  transform="translate(1326 33) rotate(-90)"
                />
                <circle
                  className="a"
                  cx="3.5"
                  cy="3.5"
                  r="3.5"
                  transform="translate(1339 33) rotate(-90)"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default AdvanceSearch;
