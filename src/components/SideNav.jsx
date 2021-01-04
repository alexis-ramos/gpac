import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiDashboard2Fill,
  RiSuitcaseFill,
  RiTeamFill,
  RiHotelFill,
  RiSendPlaneFill,
  RiMapPin2Fill,
  RiTaskFill,
  RiSendPlane2Fill,
} from 'react-icons/ri';

const SideNav = () => {
  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/register'
  ) {
    return null;
  }
  return (
    <div className="h-full min-h-screen bg-side md:w-36">
      <div className="flex flex-col space-y-3 w-full font-monse font-light">
        <div className="hidden md:flex md:w-full md:justify-center md:mt-8 md:mb-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 md:h-24 fill-current"
            viewBox="0 0 55.285 61.5"
          >
            <g transform="translate(-2702 -832)">
              <path
                className="a"
                d="M486.779,233c.1,4.687.728,9.44.145,14.041-.445,3.507-.427,6.6,1.249,9.662,4.8,8.766,3.094,8.385-1.792,13.682-2.258,2.448-4.427,4.976-6.615,7.443l-2.752-2.9c-.639,7.339-1.712,14.03-7.566,19.576.05-4.206,1.81-8.47-4.084-9.89.719-5.708,1.559-11.345,2.093-17.011a9.647,9.647,0,0,1,4.054-7.447c2.678-1.915,3.388-4.478,2.5-7.544-.962-3.323-.024-6,2.326-8.487,3.418-3.612,6.643-7.4,9.95-11.12Z"
                transform="translate(2266.261 599)"
              />
              <path
                className="a"
                d="M409.908,233c3.482,3.893,6.908,7.838,10.469,11.658a7.5,7.5,0,0,1,1.961,7.451c-.926,3.468-.251,6.236,2.754,8.389a8.6,8.6,0,0,1,3.621,6.615c.553,5.825,1.422,11.621,2.137,17.232-4.569,2.18-4.755,2.671-4,9.363-3.968-1.328-8.1-11.573-7.237-18.926l-3.305,3.055L405,264.409v-.982c1.043-2.281,2.006-4.6,3.149-6.833,1.587-3.1,1.631-6.135,1.168-9.622-.608-4.572.01-9.308.1-13.973Z"
                transform="translate(2297 599)"
              />
            </g>
          </svg>
        </div>
        <Link
          to="/dashboard"
          className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2"
        >
          <RiDashboard2Fill className="w-8 h-12 " />
          <p className="hidden md:block">Dashboard</p>
        </Link>

        <div className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2">
          <RiSuitcaseFill className="w-8 h-12 " />
          <p className="hidden md:block">Job Orders</p>
        </div>
        <Link
          to="/market"
          className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2"
        >
          <RiTeamFill className="w-8 h-12 " />
          <p className="hidden md:block">Market</p>
        </Link>
        <div className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2">
          <RiHotelFill className="w-8 h-12 " />
          <p className="hidden md:block">Companies</p>
        </div>
        <div className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2">
          <RiSendPlaneFill className="w-8 h-12 " />
          <p className="hidden md:block">S.projects</p>
        </div>
        <Link
          to="map"
          className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2"
        >
          <RiMapPin2Fill className="w-8 h-12 " />
          <p className="hidden md:block">Map</p>
        </Link>
        <div className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2">
          <RiTaskFill className="w-8 h-12 " />
          <p className="hidden md:block">Tasks Tool</p>
        </div>
        <div className="flex flex-row items-center hover:bg-red-500 px-1 space-x-2">
          <RiSendPlane2Fill className="w-8 h-12 " />
          <p className="hidden md:block">Sendouts</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
