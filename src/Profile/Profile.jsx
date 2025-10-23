import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core';
import { IconAdjustments, IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from '@tabler/icons-react';
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';
import { useState } from 'react';
import SelectInput from './SelectInput';
import { fields } from '../../public/Data/PostJob';
import ExpInput from './ExpInput';
import CertiInput from './CertiInput';

const Profile = (props) => {
  const [about, setAbout] = useState(props.about);
  const [skillls, setSkillls] = useState(props.skills);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [addExp, setAddExp] = useState(false);
   const [addCerti, setAddCerti] = useState(false);

  const handleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  const select = fields;

  return (
    <div className='w-4/5 mx-auto'>
      {/* Banner & Avatar */}
      <div className='relative'>
        <img className='rounded-t-2xl' src="/Profile/banner.jpg" alt="" />
        <img
          className='w-45 h-45 rounded-full absolute -bottom-1/3 left-3 border-mine-shaft-950 border-8'
          src="/avatar.png"
          alt=""
        />
      </div>

      {/* Role Section */}
      <div className='px-3 mt-18'>
        <div className='text-3xl font-semibold flex justify-between'>
          {props.name}
          <ActionIcon variant='subtle' color='brightSun.4' size="lg" onClick={() => handleEdit(0)}>
            {edit[0] ? <IconDeviceFloppy /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className='text-xl flex gap-1 items-center'>
              <IconBriefcase className='h-5 w-5' stroke={1.5} />
              {props.role} &bull; {props.company}
            </div>
            <div className='text-lg gap-1 flex items-center text-mine-shaft-400'>
              <IconMapPin className='h-5 w-5' stroke={1.5} />
              {props.location}
            </div>
          </>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      {/* About Section */}
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>
          About
          <ActionIcon variant='subtle' color='brightSun.4' size="lg" onClick={() => handleEdit(1)}>
            {edit[1] ? <IconDeviceFloppy /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            autosize
            minRows={3}
            placeholder='Enter about Yourself'
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
          />
        ) : (
          <div className='text-sm text-mine-shaft-300 text-justify'>
            {about}
          </div>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      {/* Skills Section */}
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>
          Skills
          <ActionIcon variant='subtle' color='brightSun.4' size="lg" onClick={() => handleEdit(2)}>
            {edit[2] ? <IconDeviceFloppy /> : <IconPencil className='h-4/5 w-4/5' />}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            value={skillls}
            onChange={setSkillls}
            placeholder="Add skills"
            splitChars={[',', ' ', '|']}
          />
        ) : (
          <div className='flex flex-wrap gap-2'>
            {(skillls ?? []).map((skill, index) => (
              <div
                key={index}
                className="bg-bright-sun-300/15 rounded-3xl text-sm font-medium text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      {/* Experience Section */}
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>
          Experience
          <div className='flex gap-2'>
            <ActionIcon variant='subtle' color='brightSun.4' size="lg" onClick={() => setAddExp(true)}>
              <IconPlus className='h-4/5 w-4/5' />
            </ActionIcon>
            <ActionIcon variant='subtle' color='brightSun.4' size="lg" onClick={() => handleEdit(3)}>
              {edit[3] ? <IconDeviceFloppy /> : <IconPencil className='h-4/5 w-4/5' />}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {(props.experience ?? []).map((exp, index) => (
            <ExpCard key={index} {...exp} edit={edit[3]} />
          ))}
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      {/* Certifications Section */}
      <div className='px-3'>
        <div className='text-2xl font-semibold mb-3 flex justify-between'>
          Certifications
          <div className='flex gap-2'>
            <ActionIcon variant='subtle' color='brightSun.4' size="lg" onClick={() => setAddCerti(true)}>
              <IconPlus className='h-4/5 w-4/5' />
            </ActionIcon>
            <ActionIcon variant='subtle' color='brightSun.4' size="lg" onClick={() => handleEdit(4)}>
              {edit[4] ? <IconDeviceFloppy /> : <IconPencil className='h-4/5 w-4/5' />}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {(props.certifications ?? []).map((certi, index) => (
            <CertiCard key={index} {...certi} edit={edit[4]} />
          ))}
          {
            addCerti &&  <CertiInput setEdit = {setAddCerti}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Profile;
