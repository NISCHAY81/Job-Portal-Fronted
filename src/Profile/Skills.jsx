import { TagsInput } from '@mantine/core'
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from '@tabler/icons-react'

import { ActionIcon } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';

const Skills = () => {
      const dispatch = useDispatch();
      const [skills, setSkills] = useState([]);
    const profile = useSelector((state)=>state.profile);
          const [edit, setEdit] = useState(false);
            const handleEdit=()=>{
        if(!edit){
          setEdit(true)
          setSkills(profile.skills)
        }
        else{
          setEdit(false)
        }
       }
       const handleSave = ()=> {
 setEdit(false)
          let updatedProfile={...profile, skills:skills}
          dispatch(changeProfile(updatedProfile))
         successNotification("Sucess", "skills updated Successfully");
       }
  return (
    <>
       <div className="text-2xl font-semibold mb-3 flex justify-between items-center">
          Skills
   <div>
          {edit && <ActionIcon
            variant="subtle"
            color="green.8"
            size="lg"
            onClick={ handleSave}
          >
            {edit ? <IconCheck /> : <IconDeviceFloppy className="h-4/5 w-4/5" />}
          </ActionIcon>}

          <ActionIcon
            variant="subtle"
            color={edit?"red.8":"brightSun.4"}
            size="lg"
            onClick={ handleEdit}
          >
            {edit ? <IconX /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
          </div>
        </div>

        {edit ? (
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add skills"
            splitChars={[',', ' ', '|']}
          />
        ) : (
          <div className="flex flex-wrap gap-2">
            {(profile.skills ?? []).map((skill, index) => (
              <div
                key={index}
                className="bg-bright-sun-300/15 rounded-3xl text-sm font-medium text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
    </>
  )
}

export default Skills
