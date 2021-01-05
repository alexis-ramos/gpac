import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import Attachment from '../components/Attachment';
import Details from '../components/Details';
import Notes from '../components/Notes';
import PictureAndButtons from '../components/PictureAndButtons';

const Talent = () => (
  <div className="container flex flex-col md:mx-auto lg:mx-auto xl:mx-auto">
    <div className="flex flex-row justify-between pt-11">
      <div className="flex flex-row items-center ">
        <span className="mr-2">
          <RiCheckboxBlankCircleFill color="red" />
        </span>
        <h3 className="font-monse font-bold text-lg">New Talent</h3>
      </div>
    </div>
    <div className="flex flex-col pt-10 md:flex-row md:space-x-10 lg:flex-row  lg:space-x-10 xl:flex-row xl:space-x-10">
      <PictureAndButtons />
      <div className="flex flex-col pt-10 w-full md:w-3/4 lg:w-3/4 xl:w-3/4">
        <Details />
        <Attachment />
        <Notes />
      </div>
    </div>
  </div>
);

export default Talent;
