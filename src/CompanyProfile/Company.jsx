import { Avatar, AvatarGroup, Button, Divider, Tabs } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import AboutComp from './AboutComp'
import CompanyJobs from './CompanyJobs'
import CompanyEmployee from './CompanyEmployee'

const Company = () => {
  return (
         <div>
        <div className='w-3/4'>
        <div className='relative z-0'>
      <img className='rounded-t-2xl !w-full' src="/Profile/banner.jpg" alt="" />
      <img className='w-36 h-36 pointer-events-none rounded-3xl absolute p-2 -bottom-1/4 left-5 border-mine-shaft-950 border-8 bg-mine-shaft-950 z-10'  src="/Icons/Google.png" alt="" />
    </div>
      <div className='px-3 mt-12'>
        <div className='text-3xl font-semibold flex justify-between'>Google<AvatarGroup>
            <Avatar src="avatar.png"/>
             <Avatar src="avatar1.png"/>
             <Avatar src="avatar2.png"/>
             <Avatar>+10k</Avatar>
            </AvatarGroup></div>
         <div className='text-lg gap-1 flex items-center text-mine-shaft-400' ><IconMapPin className='h-5 w-' stroke={1.5}/>New York</div>
      </div>
      <Divider mx="xs" my="xl"/>
    </div>
   <div>
     <Tabs variant='outline' radius="lg" defaultValue="about">
        <Tabs.List className='[&_button]:text-lg font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
        <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
        <Tabs.Panel value="employees"><CompanyEmployee/></Tabs.Panel>
    </Tabs>
   </div>
</div>
  )
}

export default Company
