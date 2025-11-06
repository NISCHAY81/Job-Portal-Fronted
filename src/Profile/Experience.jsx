import React, { useState } from 'react'
import ExpCard from './ExpCard'
import { ActionIcon } from '@mantine/core';
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from '@tabler/icons-react';
import ExpInput from './ExpInput';
import { useSelector } from 'react-redux';

const Experience = () => {
     const profile = useSelector((state)=>state.profile);
     const [addExp, setAddExp] = useState(false);
     const [edit, setEdit] = useState(false);
     const handleClick=()=>{
        setEdit(!edit);
     }
  return (
    <>
       <div className="text-2xl font-semibold mb-3 flex justify-between items-center">
          Experience
          <div className="flex gap-2">
            <ActionIcon
              variant="subtle"
              color="brightSun.4"
              size="lg"
              onClick={() => setAddExp(true)}
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
               color={edit?"red.8":"brightSun.4"}
              size="lg"
              onClick={handleClick}
            >
              {edit ? <IconX /> : <IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {(profile.experiences ?? []).map((exp, index) => (
            <ExpCard key={index} index={index} {...exp} edit={edit} />
          ))}
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
    </>
  )
}

export default Experience
