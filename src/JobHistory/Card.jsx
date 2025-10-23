import { Button, Divider, Text } from '@mantine/core'
import { IconBookmark, IconBookmarkFilled, IconCalendar, IconClockHour3 } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <Link to="/jobs" className='bg-mine-shaft-900 hover:bg-mine-shaft-850 transition-colors duration-200 p-5 w-full max-w-xs flex flex-col gap-4 rounded-2xl shadow-md hover:shadow-lg border border-mine-shaft-800'>
      
    
      <div className='flex justify-between items-start'>
        <div className='flex gap-3 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md'>
            <img className='h-7 w-7 object-contain' src={`/Icons/${props.company}.png`} alt="" /> 
          </div>
          <div>
            <div className='font-semibold text-bright-sun-400 text-sm'>{props.jobTitle}</div>
            <div className='text-xs text-mine-shaft-400'>
              {props.company} • {props.applicants} applicants
            </div>
          </div>
        </div>
      { props.saved?<IconBookmarkFilled className='text-bright-sun-400 cursor-pointer hover:text-bright-sun-400 transition-colors duration-150'/>:<IconBookmark className='text-mine-shaft-400 cursor-pointer hover:text-bright-sun-400 transition-colors duration-150'/>}
      </div>
      <div className='flex flex-wrap gap-2 text-xs'>
        <div className='py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg'>{props.experience}</div>
        <div className='py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg'>{props.jobType}</div>
        <div className='py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg'>{props.location}</div>
      </div>

      
      <div>
        <Text className='!text-xs text-justify !text-mine-shaft-300 leading-relaxed' lineClamp={3}>
          {props.description}
        </Text>
        <Divider size="xs" color='mineShaft.7' className='mt-3'/>
      </div>

     
      <div className='flex justify-between items-center text-sm'>
        <div className='font-semibold text-bright-sun-400'>
          ₹ {props.package}
        </div>
        <div className='flex gap-1 items-center text-mine-shaft-400'>
          <IconClockHour3 className='h-4 w-4' stroke={1.5}/> 
          {props.applied?"Applied":props.offered?"Interviewed":"Posted"}-
          {props.postedDaysAgo} days ago
        </div>
      </div>
      {props.offered && 
       <div className='flex gap-2'>
         <Button color='brightSun.4' variant='outline' fullWidth>Accept</Button>
         <Button color='brightSun.4' variant='light' fullWidth>Reject</Button>
       </div> 
      }
      {props.interviewing &&
          <div className='flex gap-1 text-sm items-center'>
          <IconCalendar className='text-bright-sun-400 w-5 h-5' stroke={1.5} />sun, 25 August 2024 <span className='text-mine-shaft-400'> 10:00 AM</span>
        </div>
      }
    </Link>
  )
}

export default Card
