import React from 'react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import Attachment from '../components/Attachment';
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
    <div className="flex flex-col pt-10 md:flex-row lg:flex-row xl:flex-row">
      <PictureAndButtons />
      <div className="flex flex-col pt-10">
        <Attachment />
        <Notes />
      </div>
    </div>
  </div>
);

export default Talent;
