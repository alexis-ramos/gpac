import React from 'react';

const PictureAndButtons = () => (
  <div className="flex flex-col items-center space-y-7">
    <div className="flex flex-row">
      <img
        className=" w-44 h-44 rounded-full"
        src="https://i.picsum.photos/id/612/400/500.jpg?hmac=ly4zdjsRqetzlGk6KZBCRmEnWpf2bMr5zjcExFHof0A"
        alt="profile"
      />
    </div>
    <div className="flex flex-row">
      <button
        type="submit"
        className="flex flex-row w-52 px-2 py-2 justify-center focus:outline-none bg-button hover:bg-blue-800 text-white items-center"
      >
        <span className="font-monse font-semibold text-xs">Save as draft</span>
      </button>
    </div>
    <div className="flex flex-row">
      <button
        type="submit"
        className="flex flex-row w-52 px-2 py-2 justify-center  focus:outline-none bg-button hover:bg-blue-800 text-white items-center"
      >
        <span className="font-monse font-semibold text-xs">
          Save and send to couch
        </span>
      </button>
    </div>
    <div className="flex flex-row">
      <button
        type="submit"
        className="flex flex-row w-52 px-2 py-2 justify-center text-xs font-medium leading-6 border-2 focus:outline-none bg-transparent border-gray-400 hover:bg-gray-500 text-white items-center"
      >
        <span className="font-monse font-semibold text-xs">Discard</span>
      </button>
    </div>
  </div>
);

export default PictureAndButtons;
