import React from 'react';

const Profile = () => (
  <div className=" flex flex-col md:flex-row md:flex-wrap  md:space-x-4  w-full space-y-5 md:space-x-2 py-10 px-5 mb-5 rounded-b-lg bg-rowTable">
    <div className="flex flex-row w-full"></div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="FirsName"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        First Name
        <div className="w-full mt-1 relative shadow-sm">
          <input
            type="text"
            name="FName"
            id="FName"
            className="w-full font-roboto text-sm border-none pl-2 py-2 sm:text-sm bg-search"
            placeholder="Text"
          />
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="Lname"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Last Name
        <div className="w-full mt-1 relative shadow-sm">
          <input
            type="text"
            name="Lname"
            id="Lname"
            className="w-full font-roboto text-sm border-none pl-2 py-2 sm:text-sm bg-search"
            placeholder="Text"
          />
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="status"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Status
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search "
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="salary"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Wish Salary
        <div className="w-full mt-1 relative shadow-sm">
          <input
            type="number"
            name="salary"
            id="salary"
            className="w-full  font-roboto text-sm border-none pl-2 py-2 sm:text-sm bg-search"
            placeholder="Number"
          />
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="fTitle"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Functional Title
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="title"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Title
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="seniority"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Seniority
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="industry"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Industry
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="location"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Location
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="phone"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Phone
        <div className="w-full mt-1 relative shadow-sm">
          <input
            type="number"
            name="phone"
            id="phone"
            className="w-full font-roboto text-sm border-none pl-2 py-2 sm:text-sm bg-search"
            placeholder="Text"
          />
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="email"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Email
        <div className="w-full mt-1 relative shadow-sm">
          <input
            type="email"
            name="email"
            id="email"
            className="w-full font-roboto text-sm border-none pl-2 py-2 sm:text-sm bg-search"
            placeholder="Text"
          />
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="company"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Company
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="process"
        className="w-full md:w-44  text-sm font-medium text-gray-500"
      >
        Status for Process
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
    <div className="flex flex-row w-full md:w-3/12">
      <label
        htmlFor="relocation"
        className="w-full md:w-44 text-sm font-medium text-gray-500"
      >
        Relocation
        <div className="w-full mt-1 relative shadow-sm">
          <select
            id="Status"
            name="status"
            className="w-full font-roboto text-sm focus:outline-none border-none pl-2 py-2 sm:text-sm bg-search text-gray-500"
          >
            <option>Select</option>
          </select>
        </div>
      </label>
    </div>
  </div>
);

export default Profile;
