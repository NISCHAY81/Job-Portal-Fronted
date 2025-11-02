import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Switch, rem, Divider } from "@mantine/core";
import {
  IconMessageCircle,
  IconUserCircle,
  IconFileText,
  IconMoonStars,
  IconSun,
  IconLogout2,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Slices/UserSlice";


const ProfileMenu = () => {
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.user)
  const [checked, setChecked] = useState(false);
  const [opened, setOpended] = useState(false)
  const handleLogout=()=>{
    dispatch(removeUser());
  }

  return (
    <Menu shadow="md" width={200} opened={opened} onChange={setOpended}>
      <Menu.Target>
        <div className="flex items-center gap-2 cursor-pointer">
          <div>{user.name}</div>
          <Avatar
            src="./avatar.png"
            alt="it's me"
            className="h-10 w-10 rounded-full"
          />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={()=>setOpended(true)}>
        <Link to="/profile">
        <Menu.Item leftSection={<IconUserCircle size={14} />}>
          Profile
        </Menu.Item>
        </Link>
        <Menu.Item leftSection={<IconMessageCircle size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<IconFileText size={14} />}>Resume</Menu.Item>

        <Menu.Divider />

        <div className="flex items-center justify-between px-3 py-2">
          <span className="flex items-center gap-2 text-sm">
            <IconMoonStars size={14} />
            Dark Mode
          </span>
          <Switch
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            size="md"
            color="dark.4"
            onLabel={
              <IconSun
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="yellow"
              />
            }
            offLabel={
              <IconMoonStars
                style={{ width: rem(16), height: rem(16) }}
                stroke={2.5}
                color="cyan"
              />
            }
          />
        </div>

        <Menu.Divider />
        <Menu.Item 
       onClick={handleLogout}
       color="red" leftSection={<IconLogout2 size={14} />}>
        Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
