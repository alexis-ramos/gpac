import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div className="container flex md:justify-center">
    <div className="flex flex-col w-full md:w-3/5 lg:w-2/4 md:h-auto m-8 bg-rowTable rounded-lg">
      <div className="flex w-full justify-center mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" w-14 h-14 md:w-24 md:h-24 fill-current"
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
      <div className="w-full mt-8">
        <form action="" className="mx-3">
          <label htmlFor="user">
            Username
            <input
              type="text"
              className="block w-full bg-advanceSearch p-2 border rounded border-gray-300 text-gray-400 mb-6"
            />
          </label>
          <label htmlFor="password" className="">
            Password
            <input
              type="password"
              className="block w-full bg-advanceSearch p-2 border rounded border-gray-300 text-gray-400"
            />
          </label>

          <div className="flex flex-col w-full my-5">
            <Link to="/dashboard">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-400 hover:text-white block w-full py-1 md:py-3 rounded focus:outline-none mb-6"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                type="submit"
                className=" bg-blue-600 hover:bg-blue-400 hover:text-white block w-full py-1 md:py-3 rounded focus:outline-none"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
