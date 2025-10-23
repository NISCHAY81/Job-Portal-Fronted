import React from 'react'
import { talents } from '../../public/Data/TalentData'
import Sort from '../FindJob.jsx/Sort'
import TalentCard from './TalentCard'

const Talent = () => {
  return (
    <div className='p-6 md:p-10 bg-mine-shaft-950 min-h-screen text-mine-shaft-100'>
      
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div className='text-2xl font-semibold tracking-wide'>Recommended Talents</div>
        <Sort />
      </div>  

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {talents.map((talent, index) => (
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
          />
        ))}
      </div>
    </div>
  )
}

export default Talent
