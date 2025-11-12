import React, { useState } from 'react'
import { Divider, Input, RangeSlider } from '@mantine/core'
import { searchFields } from '../../public/Data/TalentData'; 
import { MultiInput } from './../FindJob.jsx/MultiInput';
import { IconUserCircle } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../Slices/FilterSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState([0, 50]);
  const [name, setName] = useState('');

  const handleChange = (field, event) => {
    if (field === "exp") {
      dispatch(updateFilter({ exp: event }));
    } else {
      const value = event.target.value;
      dispatch(updateFilter({ [field]: value })); // ✅ dynamic key fixed
      setName(value);
    }
  };

  return (
    <div className='flex gap-2 py-8 px-5 !text-mine-shaft-100'> 
      <div className='flex items-center'>
        <div className='text-bright-sun-400 bg-mine-shaft-900 rounded-full'>
          <IconUserCircle size={20} />
        </div>
       <Input
  value={name}
  onChange={(e) => handleChange("name", e)}
  className='[&>input]:placeholder-mine-shaft-200 [&>input]:text-mine-shaft-100'
  variant="unstyled"
  placeholder="Talent Name"
/>

      </div>

      {searchFields.map((item, index) => (
        <React.Fragment key={index}>
          <div className='w-1/5'>
            <MultiInput {...item} />
          </div>
          <Divider size="xs" orientation="vertical" />
        </React.Fragment>
      ))}

      <div className='w-1/5 [&_.mantine-RangeSlider-label]:!translate-y-8'>
        <div className='flex justify-center text-sm'>
          <div className='text-mine-shaft-400'>Experiences (Years)</div>
          <div className='text-mine-shaft-400'>{value[0]} - {value[1]}</div>
        </div>
        <RangeSlider
          onChangeEnd={(e) => handleChange("exp", e)}
          min={1}
          max={50}
          minRange={1}
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
  );
};

export default SearchBar;
