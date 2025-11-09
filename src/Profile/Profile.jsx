import { ActionIcon, Avatar, Button, Divider, FileInput, Overlay, TagsInput, Textarea } from '@mantine/core';
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconEdit,
  IconMapPin,
  IconPencil,
  IconPlus,
} from '@tabler/icons-react';
import ExpCard from './ExpCard';
import CertiCard from './CertiCard';
import { useEffect } from 'react';
import SelectInput from './SelectInput';

import ExpInput from './ExpInput';
import CertiInput from './CertiInput';
import { getProfile } from '../Services/ProfileService';
import { useDispatch, useSelector } from 'react-redux';
// import fields from './../../public/Data/Profile';
import Info from './Info';
import { changeProfile, setProfile } from '../Slices/ProfileSlice';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Certificate from './Certificate';
import { useHover } from '@mantine/hooks';
import { successNotification } from '../Services/NotificationService';
import { getBase64} from '../Services/Utlities'
const Profile = () => {
  
  // const [about, setAbout] = useState(props.about);
  // const [skillls, setSkillls] = useState(props.skills);
  // const [edit, setEdit] = useState([false, false, false, false, false]);
  // const [addExp, setAddExp] = useState(false);
  // const [addCerti, setAddCerti] = useState(false);
  const user = useSelector((state) => state.user);
  const profile = useSelector((state) => state.profile); 
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(profile);
    getProfile(user.profileId)
      .then((res) => {
        dispatch(setProfile(res))
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

   const handlefileChange= async (image)=>{
    if(!image) return;
  let picture =await getBase64(image);
  let updatedProfile = {...profile,picture:picture.split(",")[1]};
   dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Profile Phooto updated successfully");
   }

  // const select = fields;
  const{hovered, ref} = useHover();
  return (
    <div className="w-4/5 mx-auto text-white">
    
      <div className="relative w-full">
        <img
          className="rounded-t-2xl w-full h-56 object-cover"
          src="/Profile/banner.jpg"
          alt="Profile banner"
        />
      <div className="absolute -bottom-1/3 left-3">
  <div ref={ref} className="relative flex items-center justify-center">
    <Avatar
      className="!w-48 !h-48 rounded-full border-8 border-mine-shaft-950 object-cover"
      src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.png"}
      alt="Profile avatar"
    />

    {hovered && (
      <>
        <Overlay
          className="!rounded-full absolute inset-0 z-[200]"
          color="#000"
          backgroundOpacity={0.6}
        />
        <IconEdit className="absolute z-[250] w-8 h-8 text-white" />
        <FileInput
        onChange={handlefileChange}
          accept="image/png, image/jpeg"
          variant="unstyled"
          className="absolute  [&_*]:!w-full !h-full !top-20 inset-0 z-[1000] cursor-pointer [&_*]:!rounded-full opacity-0"
        />
      </>
    )}
  </div>
</div>

      </div>

      <div className="px-3 mt-24">
    <Info/>
      </div>

      <Divider mx="xs" my="xl" />

    <About/>

      <Divider mx="xs" my="xl" />

    
      <div className="px-3">
       <Skills/>
      </div>

      <Divider mx="xs" my="xl" />

      
      <div className="px-3">
       <Experience/>
      </div>

      <Divider mx="xs" my="xl" />

    
      <div className="px-3 mb-10">
        <Certificate/>
      </div>
    </div>
  );
};

export default Profile;
