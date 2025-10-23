import React from 'react'
import Sort from './Sort'
import JobCard from './JobCard'
import { jobList } from '../../public/Data/JobsData'

const Job = () => {
  return (
    <div className='p-6 md:p-10 bg-mine-shaft-950 min-h-screen text-mine-shaft-100'>
    
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div className='text-2xl font-semibold tracking-wide'>Recommended Jobs</div>
        <Sort />
      </div>  
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  )
}

export default Job
