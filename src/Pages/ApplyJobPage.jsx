import React, { useEffect, useState } from 'react'
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ApplyJobComp from './../ApplyJob/ApplyJobComp';
import { getJobs } from '../Services/JobService';


const ApplyJobPage = () => {
 const { id } = useParams();
  const [job, setJob] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    getJobs(id)
      .then((res) => {
        setJob(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); 
  const navigate = useNavigate();
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'>
    <>
    <Button onClick={()=>navigate(-2)} color='brightSun.4' leftSection={<IconArrowLeft size={20}/>} variant='light'>Back</Button>
    </>
    <ApplyJobComp {...job}/>
    </div>
  )
}

export default ApplyJobPage
