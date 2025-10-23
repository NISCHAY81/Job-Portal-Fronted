import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'

const Profile = (props) => {
  return (
    <div className='w-3/4'>
    <div className='relative'>
      <img className='rounded-t-2xl' src="/Profile/banner.jpg" alt="" />
      <img className='w-45 h-45 rounded-full absolute -bottom-1/3 left-3 border-mine-shaft-950 border-8'  src="/avatar.png" alt="" />
    </div>
      <div className='px-3 mt-18'>
        <div className='text-3xl font-semibold flex justify-between'>{props.name} <Button color="brightSun.4 " variant="light" >Message</Button></div>
         <div className='text-xl flex gap-1 items-center'><IconBriefcase className='h-5 w-5 ' stroke={1.5}/>{props.role} &bull; {props.company} </div>
         <div className='text-lg gap-1 flex items-center text-mine-shaft-400' ><IconMapPin className='h-5 w-' stroke={1.5}/>{props.location}</div>
      </div>
      <Divider mx="xs" my="xl"/>
      <div className='px-3'>
        <div className='text-2xl font-semibold'>About</div>
        <div className='text-sm text-mine-shaft-300 text-justify'>{props.about}</div>
      </div>
      <Divider mx="xs" my="xl"/>
       <div className='px-3'>
        <div className='text-2xl font-semibold'>Skills</div>
        <div className='flex flex-wrap gap-2'>
          {
            props.skills.map((skills, index)=>
            <div key={index} className="bg-bright-sun-300/15 rounded-3xl text-sm font-medium text-bright-sun-400 px-3 py-1">
 {skills}
</div> )
          }
        </div>
      </div>
       <Divider mx="xs" my="xl"/>
       <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>Experience</div>
    <div className="flex flex-col gap-8">
  {props.experience.map((exp, index) => (
    <ExpCard key={index} {...exp} />
  ))}
</div>

       </div>
        <Divider mx="xs" my="xl"/>
       <div className='px-3'>
        <div className='text-2xl font-semibold mb-3'>Certifications</div>
  <div className="flex flex-col gap-8">
  {props.certifications.map((certi, index) => (
    <CertiCard key={index} {...certi} />
  ))}
</div>

       </div>
    </div>
  )
}

export default Profile
