import { Button, Divider } from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom'
import { profile } from '../../public/Data/TalentData'
import Profile from '../TalentProfile/Profile'
import Recommnded from '../TalentProfile/Recommnded'
import { useEffect, useState } from 'react'
import { getAllProfiles } from '../Services/ProfileService'


const TalentProfilePage = () => {
  const navigate = useNavigate(); 
  const [talents, setTalents] = useState([]);
  useEffect(() => {
    getAllProfiles().then((res)=>{
      setTalents(res);
    }).catch((err)=>{
      console.log(err);
      
    })
  }, []);
  return (
    <div className='min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4'>   
         <Button leftSection = {<IconArrowLeft/>} color="brightSun.4" onClick={()=>navigate(-1)} my="sm" variant="light">Back</Button>
        <div className='flex gap-5'>
        <Profile {...profile}/>
        <Recommnded talents={talents}/>
        </div>
    </div>
  )
}

export default TalentProfilePage
