import React, { useState } from 'react'
import { dropdownData } from "../../public/Data/JobsData"
import { MultiInput } from './MultiInput'
import { Divider, RangeSlider } from '@mantine/core'

const SearchBar = () => {
const [value, setValue] = useState([20, 80]);

   return (
    
    <div className='flex gap-2 py-8 px-5'>   {/* 🔥 give fixed height */}
      {
        dropdownData.map((item, index) => (
          < >
            <div key={index} className='w-1/5'>
              <MultiInput {...item} />
            </div>
            <Divider size="xs" orientation="vertical"  />
          </>
        ))
      }
        <div className='w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-8'>
      <div className='flex justify-center text-sm'>
        <div>Salary</div>
        <div>&#8377;{value[0]} LPA    -    &#8377;{value[1]} LPA</div>
      </div>
         <RangeSlider color='brightSun.4' size="xs" 
          labelTransitionProps={{

          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
         value={value}
        onChange={setValue} />
      </div>
    </div>
  )
}

export default SearchBar
