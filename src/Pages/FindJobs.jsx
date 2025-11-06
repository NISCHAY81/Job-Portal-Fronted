
import { Divider } from '@mantine/core'
import SearchBar from '../FindJob.jsx/SearchBar'
import Job from '../FindJob.jsx/Job'

const FindJobs = () => {
  return (
     <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins]'> 
    <Divider size="xs" mb="3"/>
      <SearchBar/>
      <Divider size="xs" />
      <Job/>
     </div>
  )
}

export default FindJobs
