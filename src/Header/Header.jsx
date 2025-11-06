import React, { useEffect } from 'react';
import { IconBell,  IconSettings, IconAnchor } from '@tabler/icons-react';
import {  Avatar, Button, Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
import { Link, NavLink } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../Services/ProfileService';
import { setProfile } from '../Slices/ProfileSlice';


const Header = () => {
   const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    
    getProfile(user.profileId)
      .then((res) => {
        dispatch(setProfile(res))
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='w-full h-28 text-white px-6 lg:px-20 py-4 flex justify-between items-center'>
     <NavLink to = "/">
       <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor className='h-8 w-8' stroke={2.5}/>
        <div className='text-3xl font-semibold'>JobHook</div>
      </div>
     </NavLink>

     <NavLinks/>
      <div className='flex gap-5 items-center'>
        {user?<ProfileMenu/>:<Link to="/login">
        <Button variant='subtle' color='brightSun.4'>Login</Button>
        </Link>}
        {/* <div className='bg-mine-shaft-950 p-1.5 rounded-full'>
        <IconSettings stroke={1.5}/>
        </div> */}
<div className='bg-mine-shaft-950 p-2 rounded-full overflow-visible'>
  <Indicator color='brightSun.4' size={8} offset={6}>
  <IconBell stroke={1.5} className="h-6 w-6" />
</Indicator>
</div>

      </div>
    </div>
  );
};

export default Header;
