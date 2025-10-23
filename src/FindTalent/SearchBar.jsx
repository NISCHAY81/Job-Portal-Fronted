import React, { useState } from 'react'
import { Divider, Input, RangeSlider } from '@mantine/core'
import { searchFields } from '../../public/Data/TalentData'; 
import { MultiInput } from './../FindJob.jsx/MultiInput';
import { IconUserCircle } from '@tabler/icons-react';

const SearchBar = () => {
  const [value, setValue] = useState([20, 80]);

  return (
    <div className='flex gap-2 py-8 px-5 !text-mine-shaft-100'> 
    <div className='flex items-center'>
      <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full'><IconUserCircle size={20}/></div>
      <Input className='[&_input]: !placeholder-mine-shaft-200' variant="unstyled" placeholder="Talent Name"/> 
    </div>
      {
        searchFields.map((item, index) => (
          <React.Fragment key={index}>
            <div className='w-1/5'>
              <MultiInput {...item} />
            </div>
            <Divider size="xs" orientation="vertical" />
          </React.Fragment>
        ))
      }

      <div className='w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-8'>
        <div className='flex justify-center text-sm'>
          <div className='text-mine-shaft-400'>Salary</div>
          <div className="text-mine-shaft-400">&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>
        <RangeSlider
          color='brightSun.4'
          size='xs'
          labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
          }}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  )
}

export default SearchBar
