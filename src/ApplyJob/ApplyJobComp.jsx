import React, { useState } from 'react';
import {
  Button,
  Divider,
  FileInput,
  Notification,
  NumberInput,
  rem,
  Textarea,
  TextInput,
} from '@mantine/core';
import { IconBookmark, IconCheck, IconPaperclip } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const ApplyJobComp = () => {
 const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [sec, setSec] = useState(5);
  const navigate = useNavigate();
 const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({top:0, behavior:'smooth'})
 }
 const handleSubmit =() => {
   setSubmit(true)
   let x = 5;
   setInterval(()=>{
    x--;
    setSec(x);
    if(x==0)
        navigate("/find-jobs")
   },1000)
 }

  return (
   <>
    <div className="w-2/3 mx-auto ">
      <div className="flex justify-between  mb-8">
        <div className="flex gap-4 items-center">
          <div className="p-4 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14 object-contain"
              src="/Icons/Google.png"
              alt="Google"
            />
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className="font-semibold text-2xl ">
              Software Engineer
            </h2>
            <p className="text-base text-mine-shaft-400">
              Google • 3 Days Ago • 48 applicants
            </p>
          </div>
        </div>

        <IconBookmark className="text-bright-sun-400 cursor-pointer hover:text-bright-sun-300 transition-colors duration-150" />
      </div>

      <Divider my="xl" />

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-mine-shaft-200 mb-6">
          Submit Your Application
        </h3>

        <div className="flex gap-6 mb-6">
          <TextInput
          readOnly={preview}
          variant={preview?"unstyled":"default"}
            className={`${preview?"text-mine-shaft-300 font-semibold":""}`}
            label="Full Name"
            placeholder="Enter your name"
            withAsterisk
          />
          <TextInput
            className="flex-1"
            label="Email"
            placeholder="Enter your email"
            withAsterisk
          />
        </div>

        <div className="flex gap-6 mb-6">
          <NumberInput
            className="flex-1"
            label="Phone Number"
            placeholder="Enter your phone number"
            withAsterisk
            hideControls
            min={0}
            max={9999999999}
            clampBehavior="strict"
          />
          <TextInput
            className="flex-1"
            label="Personal Website"
            placeholder="Enter your portfolio or website URL"
          />
        </div>

        <div className="mb-6">
          <FileInput
            withAsterisk
            leftSection={<IconPaperclip stroke={1.5} />}
            label="Attach your CV"
            placeholder="Upload your CV or resume"
            leftSectionPointerEvents="none"
          />
        </div>

        <div className="mb-8">
          <Textarea
            withAsterisk
            className="mt-2"
            placeholder="Type something about yourself..."
            label="Cover Letter"
            autosize
            minRows={4}
          />
        </div>

      {!preview && <Button fullWidth
        onClick={handlePreview}
          color="brightSun.4"
          variant="light"
          className="w-full"
        >
          Preview Application
        </Button>}


        {preview && <div className='flex gap-10 [&>*]:w-1/2'>
            <Button fullWidth
        onClick={handlePreview}
          color="brightSun.4"
          variant="outline"
          className="w-full"
        >
         Edit
        </Button>
        <Button fullWidth
        onClick={handleSubmit}
          color="brightSun.4"
          variant="light"
          className="w-full"
        >
          Submit
        </Button>
            </div>}
      </div>
    </div>
    <Notification className={`!border-bright-sun-400 -translate-y-20 !fixed top-0 left-[35%] transition duration-300 ease-in-out ${submit?"translate-y-0":""} `} icon={<IconCheck style={{width: rem(20),height: rem(20)}}/>}
    color='teal' withBorder title="Application Submitted!!" mt="md" withCloseButton={false}
    >
    Redirecting to Find Jobs in {sec} Seconds...
    </Notification>
    </>
  );
};

export default ApplyJobComp;
