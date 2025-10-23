
import { jobList } from '../../public/Data/JobsData'
import JobCard from '../FindJob.jsx/JobCard'

const CompanyJobs = () => {
  return (
    <div>
 <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {jobList.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  )
}

export default CompanyJobs
