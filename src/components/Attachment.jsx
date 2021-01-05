import React from 'react';
import { AiOutlineUpload } from 'react-icons/ai';

const Attachment = () => (
  <div className="flex flex-col w-full py-10 px-5 mb-5 rounded-lg bg-rowTable">
    <div className="mb-7">
      <p>Attachments</p>
    </div>
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4">
      <div className="space-y-2">
        <h1 className=" text-white font-roboto font-bold text-xs">Resume</h1>
        <p className="text-gray-400 font-roboto font-normal text-xs">
          No files here
        </p>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row">
        <button
          type="button"
          className="flex flex-row h-7 px-1 text-xs items-center justify-center text-white border-2 border-gray-400  focus:outline-none md:mr-4 "
        >
          Upload new file
          <span>
            <AiOutlineUpload />
          </span>
        </button>
        <button
          id="saveDraft"
          type="submit"
          className="px-3 h-7 font-monse font-semibold text-xs items-center justify-center text-white  bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
);
export default Attachment;
