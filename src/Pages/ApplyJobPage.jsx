import React from 'react'
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link, useNavigate } from 'react-router-dom';
import ApplyJobComp from './../ApplyJob/ApplyJobComp';


const ApplyJobPage = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'>
    <>
    <Button onClick={()=>navigate(-2)} color='brightSun.4' leftSection={<IconArrowLeft size={20}/>} variant='light'>Back</Button>
    </>
    <ApplyJobComp/>
    </div>
  )
}

export default ApplyJobPage
