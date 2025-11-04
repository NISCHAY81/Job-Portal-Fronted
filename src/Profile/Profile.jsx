import { ActionIcon, Button, Divider, TagsInput, Textarea } from '@mantine/core';
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from '@tabler/icons-react';
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';
import { useEffect, useState } from 'react';
import SelectInput from './SelectInput';

import ExpInput from './ExpInput';
import CertiInput from './CertiInput';
import { getProfile } from '../Services/ProfileService';
import { useDispatch, useSelector } from 'react-redux';
// import fields from './../../public/Data/Profile';
import Info from './Info';
import { setProfile } from '../Slices/ProfileSlice';

const Profile = (props) => {
  const dispatch = useDispatch();
  const [about, setAbout] = useState(props.about);
  const [skillls, setSkillls] = useState(props.skills);
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    console.log(profile);
    getProfile(user.id)
      .then((data) => {
        dispatch(setProfile(data))
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  // const select = fields;

  return (
    <div className="w-4/5 mx-auto text-white">
      {/* Banner + Avatar */}
      <div className="relative w-full">
        <img
          className="rounded-t-2xl w-full h-56 object-cover"
          src="/Profile/banner.jpg"
          alt="Profile banner"
        />
        <img
          className="w-40 h-40 rounded-full absolute -bottom-20 left-6 border-8 border-mine-shaft-950 object-cover"
          src="/avatar.png"
          alt="Profile avatar"
        />
      </div>

      {/* Profile Header */}
      <div className="px-3 mt-24">
    <Info/>
      </div>

      <Divider mx="xs" my="xl" />

      {/* About Section */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between items-center">
          About
          <ActionIcon
            variant="subtle"
            color="brightSun.4"
            size="lg"
            onClick={() => handleEdit(1)}
          >
            {edit[1] ? <IconDeviceFloppy /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
        </div>

        {edit[1] ? (
          <Textarea
            autosize
            minRows={3}
            placeholder="Enter about yourself"
            value={about}
            onChange={(event) => setAbout(event.currentTarget.value)}
          />
        ) : (
          <div className="text-sm text-mine-shaft-300 text-justify leading-relaxed">
            {profile.about}
          </div>
        )}
      </div>

      <Divider mx="xs" my="xl" />

      {/* Skills Section */}
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between items-center">
          Skills
          <ActionIcon
            variant="subtle"
            color="brightSun.4"
            size="lg"
            onClick={() => handleEdit(2)}
          >
            {edit[2] ? <IconDeviceFloppy /> : <IconPencil className="h-4/5 w-4/5" />}
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
      </div>

      <Divider mx="xs" my="xl" />

      {/* Experience Section */}
      <div className="px-3">
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
              color="brightSun.4"
              size="lg"
              onClick={() => handleEdit(3)}
            >
              {edit[3] ? <IconDeviceFloppy /> : <IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {(profile.experiences ?? []).map((exp, index) => (
            <ExpCard key={index} {...exp} edit={edit[3]} />
          ))}
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      {/* Certifications Section */}
      <div className="px-3 mb-10">
        <div className="text-2xl font-semibold mb-3 flex justify-between items-center">
          Certifications
          <div className="flex gap-2">
            <ActionIcon
              variant="subtle"
              color="brightSun.4"
              size="lg"
              onClick={() => setAddCerti(true)}
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>
            <ActionIcon
              variant="subtle"
              color="brightSun.4"
              size="lg"
              onClick={() => handleEdit(4)}
            >
              {edit[4] ? <IconDeviceFloppy /> : <IconPencil className="h-4/5 w-4/5" />}
            </ActionIcon>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {(profile.certifications ?? []).map((certi, index) => (
            <CertiCard key={index} {...certi} edit={edit[4]} />
          ))}
          {addCerti && <CertiInput setEdit={setAddCerti} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
