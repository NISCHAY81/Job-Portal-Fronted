import React from 'react'
import TalentCard from '../FindTalent/TalentCard';
import { talents } from '../../public/Data/TalentData';

const Recommnded = (props) => {
  return (
    <div className="px-3  mb-0 pb-0">
      <div className="text-2xl font-semibold text-bright-sun-400 mb-4">
        Recommended Talent
      </div>
      <div className="flex flex-col gap-5 mb-0 pb-0">
        {props?.talents?.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  )
}

export default Recommnded
