import React, { useEffect, useState } from 'react'
import JobCard from './../FindJob.jsx/JobCard';
import { useParams } from 'react-router-dom';
import { getAllJobs } from '../Services/JobService';

const RecommendedJob = () => {
  const[jobList, setJobList] = useState([])
  const {id} = useParams();
    useEffect(()=>{
    getAllJobs().then((res)=>{
      setJobList(res);
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])
  return (
    <div className="px-3  mb-0 pb-0">
      <div className="text-2xl font-semibold mb-4">
        Recommended Job
      </div>
      <div className="flex flex-col gap-5 mb-0 pb-0 justify-around">
          {jobList
          .filter((job) => job.id !== Number(id)) //
          .slice(0, 5) 
          .map((talent, index) => (
            <JobCard key={index} {...talent} />
          ))}
      </div>
    </div>
  )
}

export default RecommendedJob
