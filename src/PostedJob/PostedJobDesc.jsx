import { Badge, Tabs } from '@mantine/core'
import React from 'react'
import JobDesc from '../JobDesc/JobDesc'
import { talents } from '../../public/Data/TalentData'
import TalentCard from '../FindTalent/TalentCard'


const PostedJobDesc = () => {
  return (
    <div className='mt-5 w-3/4 px-5'>
      <div className='text-2xl font-semibold mb- flex items-center'>Software Engineer<Badge variant='light' ml="sm" color='brightSun.4'size='sm'>Badge</Badge></div>
      <div className='font-medium text-mine-shaft-300'>New York, United State</div>
      <div>
          <Tabs variant='outline' radius="lg" defaultValue="overview">
        <Tabs.List className='[&_button]:text-lg font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview" className='[&>div]:w-full'>
           <JobDesc edit/>
        </Tabs.Panel>
        <Tabs.Panel value="applicants">
            <div className='flex mt-10 flex-wrap gap-5 justify-around'>
           {talents.slice(0, 6).map((talent, index) => (
          <TalentCard
            key={index}
            image={talent.image}
            role={talent.role}
            name={talent.name}
            company={talent.company}
            topSkills={talent.topSkills}
            location={talent.location}
            about={talent.about}
            expectedCtc={talent.expectedCtc}
            posted
          />
        ))}
            </div>
        </Tabs.Panel>
        <Tabs.Panel value="invited">
                <div className='flex mt-10 flex-wrap gap-5 justify-around'>
           {talents.slice(0, 6).map((talent, index) => (
          <TalentCard
            key={index}
            image={talent.image}
            role={talent.role}
            name={talent.name}
            company={talent.company}
            topSkills={talent.topSkills}
            location={talent.location}
            about={talent.about}
            expectedCtc={talent.expectedCtc}
            invited
          />
        ))}
            </div>
        </Tabs.Panel>
    </Tabs>
      </div>
    </div>
  )
}

export default PostedJobDesc
