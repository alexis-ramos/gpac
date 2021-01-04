import React from 'react';
import { Link } from 'react-router-dom';
import { RiCheckboxBlankCircleFill, RiAddCircleLine } from 'react-icons/ri';
import ListTalent from '../components/ListTalent';

const Market = () => (
  <div className="container md:mx-auto lg:mx-auto xl:mx-auto flex flex-col">
    <div className="flex flex-row justify-between pt-11">
      <div className="flex flex-row items-center ">
        <span className="mr-2">
          <RiCheckboxBlankCircleFill color="red" />
        </span>
        <h3 className="font-monse font-bold text-lg">Market</h3>
      </div>
      <div>
        <button
          type="submit"
          className="flex flex-row px-2 space-x-2  focus:outline-none bg-button hover:bg-blue-800 text-white py-2 items-center"
        >
          <span className="font-monse font-semibold text-xs">
            Add new talent
          </span>
          <span>
            <RiAddCircleLine className=" w-3 h-3" />
          </span>
        </button>
      </div>
    </div>
    <div className="flex flex-row pt-16 pb-8">
      <ListTalent />
    </div>
  </div>
);

export default Market;
