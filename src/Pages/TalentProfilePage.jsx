import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { profile } from '../../public/Data/TalentData'
import Profile from '../TalentProfile/Profile'
import Recommnded from '../TalentProfile/Recommnded'


const TalentProfilePage = () => {
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'>   
        <Link to="/find-talent" className='my-4 inline-block'>
         <Button leftSection = {<IconArrowLeft/>} color="brightSun.4" variant="light">Back</Button>
        </Link>
      
        <div className='flex gap-5'>
        <Profile {...profile}/>
        <Recommnded/>
        </div>
    </div>
  )
}

export default TalentProfilePage
