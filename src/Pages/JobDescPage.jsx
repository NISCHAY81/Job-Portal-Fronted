import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

import RecommendedJob from '../JobDesc/RecommendedJob'
import JobDesc from './../JobDesc/JobDesc';



const JobDescPage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'>   
        <Link to="/find-job" className='my-4 inline-block'>
         <Button leftSection = {<IconArrowLeft/>} color="brightSun.4" variant="light">Back</Button>
        </Link>
        <div className='flex gap-5 justify-around'>
         <JobDesc/>
         <RecommendedJob/>
        </div>
    </div>
  )
}

export default JobDescPage
