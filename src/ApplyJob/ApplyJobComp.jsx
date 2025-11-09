// import React, { useState } from 'react';
import {
  Button,
  Divider,
  FileInput,
  Notification,
  NumberInput,

  Textarea,
  TextInput,
} from '@mantine/core';
import { IconBookmark, IconCheck, IconPaperclip } from '@tabler/icons-react';
// import { useNavigate } from 'react-router-dom';
import ApplicationForm from './ApplicationForm';
import { timeAgo } from '../Services/Utlities';


const ApplyJobComp = (props) => {
//  const [preview, setPreview] = useState(false);
  return (
   <>
    <div className="w-2/3 mx-auto ">
      <div className="flex justify-between  mb-8">
        <div className="flex gap-4 items-center">
          <div className="p-4 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14 object-contain"
              src={`/Icons/${props.company}.png`}
              alt="Google"
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className="font-semibold text-2xl ">
              {props.jobTitle}
            </h2>
            <p className="text-base text-mine-shaft-400">
               {props.company} • {timeAgo(props.postTime)} • {Array.isArray(props.applicants)
                ? `${props.applicants.length} applicants`
                : `${props.applicants || 0} applicants`}
            </p>
          </div>
        </div>

        <IconBookmark className="text-bright-sun-400 cursor-pointer hover:text-bright-sun-300 transition-colors duration-150" />
      </div>

      <Divider my="xl" />

     <ApplicationForm />
    </div>
    </>
  );
};

export default ApplyJobComp;
