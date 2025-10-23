import React from 'react'
import Profile from '../Profile/Profile'
import { Divider } from '@mantine/core'
import { profile } from '../../public/Data/TalentData'



const ProfilePage = () => {
  return (
    <div  className="min-h-[90vh] font-['poppins'] overflow-hidden">
       <Divider mx="md" mb="xl"/>
       <Profile {...profile}/>

    </div>
  )
}

export default ProfilePage
