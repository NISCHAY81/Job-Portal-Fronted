import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import {
  IconCalendar,
  IconCalendarTime,
  IconHeart,
  IconMapPin,
} from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, TimeInput } from "@mantine/dates";

import { getProfile } from "../Services/ProfileService";
import { changeAppStatus } from "../Services/JobService";
import {
  errorNotification,
  successNotification,
} from "../Services/NotificationService";
import { formatInterviewTime, openBase64InNewTab } from "../Services/Utlities";


const TalentCard = (props) => {

  const { id } = useParams();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [app, { open: openApp, close: closeApp }] = useDisclosure(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (props.applicantId) {
      getProfile(props.applicantId)
        .then((res) => setProfile(res))
        .catch((err) => console.log(err));
    } else {
      setProfile(props);
    }
  }, [props]);

  const handleOffer = async (status) => {
    if (status === "INTERVIEWING" && (!date || !time)) {
      errorNotification("Error", "Please select both date and time before scheduling");
      return;
    }

    let localIsoNoZone = null;
    if (status === "INTERVIEWING") {
      const [hh, mm] = time.split(":").map(Number);
      const dt = new Date(date);
      dt.setHours(hh || 0, mm || 0, 0, 0);

      const yyyy = dt.getFullYear();
      const MM = String(dt.getMonth() + 1).padStart(2, "0");
      const dd = String(dt.getDate()).padStart(2, "0");
      const HH = String(dt.getHours()).padStart(2, "0");
      const MMins = String(dt.getMinutes()).padStart(2, "0");
      localIsoNoZone = `${yyyy}-${MM}-${dd}T${HH}:${MMins}`;
    }

    const interview = {
      id,
      applicantId: profile.applicantId ?? profile.id,
      applicationStatus: status,
      interviewTime: localIsoNoZone,
    };

    try {
      await changeAppStatus(interview);
      if (status === "INTERVIEWING") {
        successNotification("Interview Scheduled", "Interview Scheduled Successfully");
      } else if (status === "OFFERED") {
        successNotification("Offered", "Offer has been sent Successfully");
      } else {
        successNotification("Rejected", "Applicant has been Rejected");
      }
      window.location.reload();
    } catch (err) {
      console.error("Backend Error:", err);
      const message =
        err.response?.data?.errorMessage ||
        err.response?.data?.message ||
        "Internal Server Error";
      errorNotification("Error", message);
    }
  };

  return (
    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-850 transition-all duration-300 p-6 sm:p-5 w-full max-w-sm flex flex-col gap-4 rounded-2xl shadow-md hover:shadow-lg border border-mine-shaft-800 hover:border-bright-sun-400 transform hover:-translate-y-1">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="p-1.5 bg-mine-shaft-800 rounded-full">
            <Avatar
              className="h-12 w-12 object-cover"
              src={
                profile.picture
                  ? `data:image/jpeg;base64,${profile.picture}`
                  : "./avatar.png"
              }
              alt={props.name}
              radius="xl"
            />
          </div>
          <div>
            <div className="font-semibold text-bright-sun-400 text-sm">
              {props.role}
            </div>
            <div className="text-lg font-semibold text-white leading-tight">
              {profile.name}
            </div>
            <div className="text-xs text-mine-shaft-400 mt-0.5">
              {profile.jobTitle || "—"} &bull; {profile?.company || "N/A"}
            </div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-400 cursor-pointer hover:text-bright-sun-400 transition-colors duration-150" />
      </div>

      {/* Skills */}
      {profile.skills?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {profile.skills.map((skill, idx) => (
            <span
              key={idx}
              className="py-1 px-3 bg-mine-shaft-800 text-bright-sun-400 rounded-full text-xs font-medium hover:bg-mine-shaft-700 transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <Divider  />

      {/* About */}
      <Text className="!text-xs text-mine-shaft-300 leading-relaxed text-justify mt-2" lineClamp={3}>
        {profile.about || "No description provided"}
      </Text>
 <Divider  />

      {/* Info Section */}
      {props.applicationStatus === "INTERVIEWING" ? (
        <div className="flex items-center gap-2 text-mine-shaft-200 text-sm">
          <IconCalendar stroke={1.5} /> 
          <span>Interview: {formatInterviewTime(props.interviewTime)}</span>
        </div>
      ) : (
        <div className="flex justify-between items-center text-sm">
          <div className="font-semibold text-bright-sun-400">
            Experience: 
          </div>
              <div className="text-mine-shaft-300">{props.totalExp?props.totalExp:1} years</div>
        </div>
      )}

      <Divider  />

      {/* Location */}
      <div className="flex justify-between items-center text-xs text-mine-shaft-400">
        <span className="text-sm font-semibold text-bright-sun-400">
          Location
        </span>
        <div className="flex items-center gap-1">
          <IconMapPin className="h-4 w-4" />
          <span>{profile?.location || "Not specified"}</span>
        </div>
      </div>

 <Divider  />

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        {props.applicationStatus === "INTERVIEWING" ? (
          <>
            <Button
              onClick={() => handleOffer("OFFERED")}
              fullWidth
              color="brightSun.4"
              variant="outline"
              className="font-medium rounded-xl border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-black transition-all duration-200"
            >
              Accept
            </Button>
            <Button
              onClick={() => handleOffer("REJECTED")}
              fullWidth
              color="red"
              variant="outline"
              className="font-medium rounded-xl border-red-400 text-red-400 hover:bg-red-400 hover:text-black transition-all duration-200"
            >
              Reject
            </Button>
          </>
        ) : (
          <>
            <Link to={`/talent-profile/${profile?.id}`} className="w-1/2">
              <Button
                fullWidth
                color="brightSun.4"
                variant="filled"
                className="font-medium rounded-xl bg-bright-sun-400 hover:bg-bright-sun-500 text-black transition-all"
              >
                Profile
              </Button>
            </Link>
            {props.applicationStatus === "APPLIED" ? (
              <Button
                rightSection={<IconCalendar className="w-5 h-5" />}
                fullWidth
                variant="outline"
                className="font-medium rounded-xl border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-500 hover:text-black transition-all"
                onClick={open}
              >
                Schedule
              </Button>
            ) : (
              <Button
                fullWidth
                variant="outline"
                className="font-medium rounded-xl border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-500 hover:text-black transition-all"
              >
                Message
              </Button>
            )}
          </>
        )}
      </div>

      {(props.applicationStatus === "INTERVIEWING" ||
        props.applicationStatus === "APPLIED") && (
        <Button
          onClick={openApp}
          color="brightSun.4"
          className="mt-2 font-medium rounded-xl bg-bright-sun-400 text-black hover:bg-bright-sun-500 transition-all"
          variant="filled"
          fullWidth
        >
          View Application
        </Button>
      )}

      {/* Schedule Modal */}
      <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
        <div className="flex flex-col gap-4">
          <DateInput
            minDate={new Date()}
            value={date || ""}
            onChange={setDate}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput
            label="Time"
            format="12"
            placeholder="Select time"
            value={time}
            onChange={(e) => setTime(e.currentTarget.value)}
            onFocus={(e) => e.target.showPicker?.()}
          />
          <Button
            onClick={() => handleOffer("INTERVIEWING")}
            color="brightSun.4"
            variant="filled"
            className="rounded-lg font-medium bg-bright-sun-400 hover:bg-bright-sun-500 transition-all"
          >
            Schedule
          </Button>
        </div>
      </Modal>

      {/* Application Modal */}
      <Modal opened={app} onClose={closeApp} title="Application" centered>
        <div className="flex flex-col gap-3 text-sm text-white">
          <div>
            <strong>Email:</strong>{" "}
            <a
              className="text-bright-sun-400 hover:underline"
              href={`mailto:${props.email}`}
            >
              {props.email}
            </a>
          </div>
          <div>
            <strong>Website:</strong>{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-bright-sun-400 hover:underline"
              href={props.website}
            >
              {props.website}
            </a>
          </div>
          <div>
            <strong>Resume:</strong>{" "}
            <span
              className="text-bright-sun-400 hover:underline cursor-pointer"
              onClick={() => openBase64InNewTab(props.resume, "pdf")}
            >
              {props.name}
            </span>
          </div>
          <div>
            <strong>Cover Letter:</strong> 
            <p className="mt-1 text-mine-shaft-300">{props.coverLetter}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
