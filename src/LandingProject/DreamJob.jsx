import { Avatar, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import React from 'react'

const DreamJob = () => {
  return (
   <div className='flex items-center p-20'>
    <div className="flex flex-col w-[45%] ">
        <div className="text-6xl font-bold text-mine-shaft-100 leading-tight [&>span]:text-bright-sun-400" >
            Find your <span >dream </span><span>Job </span> with us</div>
        <div className="text-lg text-mine-shaft-100" >Good Life begins with a good company. Start explore thousands of jobs in one  place.</div>
        <div className=" flex gap-3 mt-5">
              <TextInput
              className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
      variant="unstyled"
      label="Job Title"
      placeholder="Software Engineer"
    />
      <TextInput
      className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100  [&_input]:!text-mine-shaft-100'
      variant="unstyled"
      label="Job type"
      placeholder="full Time"
    />
    <div className='flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer'>
  <IconSearch className='  h-[85%] w-[85%]'/>
    </div>
        </div>
    </div>
    <div className="w-[55%] flex items-center justify-center">
       <div className='w-[30rem] relative'>
         <img src="/Boy.png" alt=""  />
         <div className='w-fit top-[50%] -right-10 absolute border-bright-sun-400 border rounded-lg p-2 backdrop-blur-xs '>
            <div className='text-center text-sm mb-1 text-mine-shaft-100'>10K+ got job</div>
             <Avatar.Group>
      <Avatar src="avatar.png" />
      <Avatar src="avatar1.png" />
      <Avatar src="avatar2.png" />
      <Avatar>+5</Avatar>
    </Avatar.Group>  
         </div>
         <div className='w-fit top-[28%] -left-5 absolute border-bright-sun-400 border rounded-lg p-2 backdrop-blur-xs gap-3 flex flex-col'>
             <div className='flex gap-2 items-center'>
               <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img src="/Google.png" alt="" />
               </div>
               <div className="text-sm text-mine-shaft-100">
                <div className="">Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
               </div>
             </div>
             <div className='flex justify-around gap-2 text-mine-shaft-200 text-xs'>
                <span>1 day ago</span>
                <span>120 Applicants</span>
             </div>
         </div>
       </div>
    </div>
   </div>
  )
}

export default DreamJob