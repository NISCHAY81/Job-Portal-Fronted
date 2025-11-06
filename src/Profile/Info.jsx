import React, { useState } from 'react'

import { IconBriefcase, IconCheck, IconDeviceFloppy, IconMapPin, IconPencil, IconX } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import fields from '../../public/Data/Profile';
import SelectInput from './SelectInput';
import { useForm } from '@mantine/form';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfile } from '../Slices/ProfileSlice';
import { successNotification } from '../Services/NotificationService';



const Info = () => {
     const select = fields;
     const dispatch = useDispatch();
      const user = useSelector((state)=>state.user);
     const profile = useSelector((state)=>state.profile);
       const [edit, setEdit] = useState(false);

       const handleSave =()=>{
                  setEdit(false)
          let updatedProfile={...profile, ...form.getValues()}
          dispatch(changeProfile(updatedProfile))
         successNotification("Sucess", "Profile updated Successfully");
       }
       const handleEdit=()=>{
        if(!edit){
          setEdit(true)
          form.setValues({jobTitle: profile.jobTitle, company:profile.company, location: profile.location})
        }
        else{
          setEdit(false)
        }
       }
         const form = useForm({
    mode: 'controlled',
    initialValues: { jobTitle: '', company: '', location:''},
  });
  return (
    <>
          <div className="text-3xl font-semibold flex justify-between items-center">
          {user.name}
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
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput form={form} name="jobTitle" {...select[0]} />
              <SelectInput form={form} name="company" {...select[1]} />
            </div>
            <SelectInput form={form} name="location" {...select[2]} />
          </div>
        ) : (
          <div className="mt-4">
            <div className="text-xl flex gap-2 items-center">
              <IconBriefcase className="h-5 w-5" stroke={1.5} />
            {profile.jobTitle} &bull; {profile.company}
            </div>
            <div className="text-lg flex gap-2 items-center text-mine-shaft-400 mt-1">
              <IconMapPin className="h-5 w-5" stroke={1.5} />
             {profile.location}
            </div>
          </div>
        )} 
    </>
  )
}

export default Info
