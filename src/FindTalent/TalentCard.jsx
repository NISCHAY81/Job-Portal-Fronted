import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Modal, Text } from '@mantine/core';
import { IconBookmark, IconCalendar, IconMapPin } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { DateInput, TimeInput } from '@mantine/dates';
import { getProfile } from '../Services/ProfileService';
import Company from './../CompanyProfile/Company';

const TalentCard = (props) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if(props.applicantId)getProfile(props.applicantId).then((res)=>{
      setProfile(res);
    }).catch((err)=>{
      console.log(err);
    })
    else setProfile(props)
  }, [props]);
  return (
    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-850 transition-colors duration-200 p-5 w-full max-w-xs flex flex-col gap-4 rounded-2xl shadow-md hover:shadow-lg border border-mine-shaft-800 hover:border-bright-sun-400">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="p-2 bg-mine-shaft-800 rounded-lg">
            <Avatar
              className="h-7 w-7 object-contain"
              src={profile.picture ? `data:image/jpeg;base64,${profile.picture}` : "./avatar.png"}
              alt={props.name}
            />
          </div>
          <div>
            <div className="font-semibold text-bright-sun-400 text-sm">
              {props.role}
            </div>
            <div className="text-lg font-semibold">{props.name || "Unknown"} </div>
            <div className="text-xs text-mine-shaft-400">
              {profile.jobTitle} &bull; {props?.Company}
            </div>
          </div>
        </div>
        <IconBookmark className="text-mine-shaft-400 cursor-pointer hover:text-bright-sun-400 transition-colors duration-150" />
      </div>

      {/* Skills / Tags */}
      <div className="flex flex-wrap gap-2 mt-10 text-xs">
        {props.topSkills?.slice(0, 3).map((skill, idx) => (
          <div key={idx} className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg">
            {skill}
          </div>
        ))}
        {props.location && (
          <div className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg">
            {props.location}
          </div>
        )}
      </div>

      {/* Description */}
      <div>
        <Text className="!text-xs text-justify !text-mine-shaft-300 leading-relaxed" lineClamp={3}>
          {props.about || "No description provided"}
        </Text>
      </div>

      <Divider size="xs" color="mineShaft.7" />

      {/* Footer */}
      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendar stroke={1.5} /> Interview: August 27, 2024 10:00 AM
        </div>
      ) : (
        <div className="flex justify-between items-center text-sm">
          <div className="font-semibold text-bright-sun-400">
            {props.expectedCtc ? `${props.expectedCtc} LPA` : "N/A"}
          </div>
          <div className="flex gap-1 items-center text-mine-shaft-400">
            <IconMapPin className="h-4 w-4" stroke={1.5} />{" "}
            {props.postedDaysAgo || Math.floor(Math.random() * 10) + 1} days ago
          </div>
        </div>
      )}

      <Divider color="mineShaft.7" size="xs" />

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        {!props.invited && (
          <>
            <NavLink to="/talent-profile" className="w-1/2">
              <Button
                fullWidth
                color="brightSun.4"
                variant="filled"
                className="font-medium rounded-xl transition-colors duration-150 hover:bg-bright-sun-500"
              >
                Profile
              </Button>
            </NavLink>

            {props.posted ? (
              <Button
                rightSection={<IconCalendar className="w-5 h-5" />}
                fullWidth
                color="brightSun.4"
                variant="outline"
                className="font-medium rounded-xl border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-500 hover:text-black transition-colors duration-150"
                onClick={open}
              >
                Schedule
              </Button>
            ) : (
              <Button
                fullWidth
                color="brightSun.4"
                variant="outline"
                className="font-medium rounded-xl border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-500 hover:text-black transition-colors duration-150"
              >
                Message
              </Button>
            )}
          </>
        )}

        {props.invited && (
          <>
            <Button
              fullWidth
              color="brightSun.4"
              variant="outline"
              className="font-medium rounded-xl transition-colors duration-150 hover:bg-bright-sun-500 hover:text-black"
            >
              Accept
            </Button>
            <Button
              fullWidth
              color="brightSun.4"
              variant="light"
              className="font-medium rounded-xl transition-colors duration-150 hover:bg-bright-sun-500"
            >
              Reject
            </Button>
          </>
        )}
      </div>

      {/* Modal */}
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className="flex flex-col gap-4">
          <DateInput
            minDate={new Date()}
            value={date}
            onChange={setDate}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput
            label="Time"
            placeholder="Select time"
            value={time}
            onChange={setTime}
            onFocus={(e) => e.target.showPicker?.()}
          />
          <Button color="brightSun.4" variant="light">
            Schedule
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
