import { Button, Divider } from '@mantine/core'
import { IconBriefcase, IconMapPin } from '@tabler/icons-react'
import ExpCard from './ExpCard'
import CertiCard from './CertiCard'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProfile } from '../Services/ProfileService'

const Profile = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    window.scroll(0, 0);
    getProfile(id)
      .then((res) => {
        setProfile(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="w-3/4">
      {/* Header */}
      <div className="relative">
       <img
  className="w-full h-[40rem] object-cover object-center rounded-t-2xl"
  src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : './avatar.png'}
  alt="Profile Cover"
/>
        <img
          className="w-44 h-44 rounded-full absolute -bottom-20 left-6 border-8 border-mine-shaft-950 object-cover shadow-lg"
          src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : './avatar.png'}
          alt="Profile Avatar"
        />
      </div>

      {/* Basic Info */}
      <div className="px-6 mt-24">
        <div className="text-3xl font-semibold flex justify-between items-center">
          <span>{profile.name || 'Unnamed User'}</span>
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>

        <div className="text-xl flex gap-2 items-center mt-2">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          <span>{profile.jobTitle || 'No Title'} &bull; {profile.company || 'No Company'}</span>
        </div>

        <div className="text-lg gap-2 flex items-center text-mine-shaft-400 mt-1">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          <span>{profile.location || 'No Location'}</span>
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      {/* About */}
      <div className="px-6">
        <div className="text-2xl font-semibold mb-2">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify leading-relaxed">
          {profile.about || 'No description available.'}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      {/* Skills */}
      <div className="px-6">
        <div className="text-2xl font-semibold mb-2">Skills</div>
        <div className="flex flex-wrap gap-2">
          {profile.skills?.map((skill, index) => (
            <div
              key={index}
              className="bg-bright-sun-300/15 rounded-3xl text-sm font-medium text-bright-sun-400 px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      {/* Experience */}
      <div className="px-6">
        <div className="text-2xl font-semibold mb-3">Experience</div>
        <div className="flex flex-col gap-8">
          {profile.experiences?.map((exp, index) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>

      <Divider mx="xs" my="xl" />

      {/* Certifications */}
      <div className="px-6 mb-10">
        <div className="text-2xl font-semibold mb-3">Certifications</div>
        <div className="flex flex-col gap-8">
          {profile.certifications?.map((certi, index) => (
            <CertiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
