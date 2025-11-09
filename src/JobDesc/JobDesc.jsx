import React, { useEffect, useState } from "react";
import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card } from "../../public/Data/JobDescData";
// @ts-ignore
import DOMPurify from "dompurify";
import { timeAgo } from "../Services/Utlities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";

const JobDesc = (props) => {
  const [applied, setApplied] = useState(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const user = useSelector((state) => state.user);
  const data = DOMPurify.sanitize(props.description);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (props?.applicants && user?.id) {
      const hasApplied = props.applicants.some(
        (applicant) => applicant.applicantId === user.id
      );
      setApplied(hasApplied);
    }
  }, [props.applicants, user.id]);

  const handleSaveJob = () => {
    let savedJobs = [...(profile.savedJobs || [])];
    if (savedJobs.includes(props.id)) {
      savedJobs = savedJobs.filter((id) => id !== props.id);
    } else {
      savedJobs = [...savedJobs, props.id];
    }
    const updatedProfile = { ...profile, savedJobs };
    dispatch(changeProfile(updatedProfile));
  };

  return (
    <div className="w-2/3">
      {/* Job header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14 object-contain"
              src={`/Icons/${props.company}.png`}
              alt={props.company}
            />
          </div>
          <div>
            <div className="font-semibold text-bright-sun-400 text-2xl">
              {props.jobTitle}
            </div>
            <div className="text-lg text-mine-shaft-400">
              {props.company} • {timeAgo(props.postTime)} •{" "}
              {props.applicants ? props.applicants.length : 0} Applicants
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-2 items-center">
          {/* Applicant view */}
          {!props.edit && (
            applied ? (
              <Button color="green.8" variant="light" size="sm">
                Applied
              </Button>
            ) : (
              <Link to={`/apply-job/${props.id}`}>
                <Button color="brightSun.4" variant="light" size="sm">
                  Apply
                </Button>
              </Link>
            )
          )}

          {/* Employer (edit) view */}
          {props.edit && (
            <>
              <Button color="brightSun.4" variant="light" size="sm">
                Edit
              </Button>
              <Button color="red.5" variant="outline" size="sm">
                Delete
              </Button>
            </>
          )}

          {/* Bookmark toggle */}
          {!props.edit && (
            profile.savedJobs?.includes(props.id) ? (
              <IconBookmarkFilled
                onClick={handleSaveJob}
                className="text-bright-sun-400 cursor-pointer"
              />
            ) : (
              <IconBookmark
                onClick={handleSaveJob}
                className="text-mine-shaft-400 cursor-pointer hover:text-bright-sun-400 transition-colors duration-150"
              />
            )
          )}
        </div>
      </div>

      <Divider my="xl" />

      {/* Job Details Cards */}
      <div className="flex justify-between">
        {card.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <ActionIcon
              className="!h-12 !w-12"
              color="brightSun.4"
              variant="light"
              size="lg"
              radius="xl"
            >
              <item.icon className="h-4/5 w-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-sm text-mine-shaft-300">{item.name}</div>
            <div className="font-semibold">
              {props ? props[item.id] : "NA"}
              {item.id === "packageOffered" && <> LPA</>}
            </div>
          </div>
        ))}
      </div>

      <Divider my="xl" />

      {/* Skills */}
      <div>
        <div className="text-xl font-semibold mb-5">Required Skills</div>
        <div className="flex flex-wrap gap-2">
          {props?.skillsRequired?.map((item, index) => (
            <ActionIcon
              key={index}
              color="brightSun.4"
              className="!h-fit !w-fit font-medium !text-sm"
              variant="light"
              p="xs"
              radius="xl"
            >
              {item}
            </ActionIcon>
          ))}
        </div>

        <Divider my="xl" />

        {/* Job Description */}
        <div
          className="[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-300 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>

      <Divider my="xl" />

      {/* Company Info */}
      <div>
        <div className="text-xl font-semibold mb-5">About the Company</div>

        <div className="flex justify-between items-start mb-3">
          <div className="flex gap-3 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img
                className="h-8 object-contain"
                src={`/Icons/${props.company}.png`}
                alt={props.company}
              />
            </div>
            <div>
              <div className="text-lg font-medium">{props.company}</div>
              <div className="text-mine-shaft-300">10K+ Employees</div>
            </div>
          </div>

          <Link to={`/company/${props.company}`}>
            <Button color="brightSun.4" variant="light" size="sm">
              Company page
            </Button>
          </Link>
        </div>

        <div className="text-mine-shaft-300 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptates
          commodi blanditiis ducimus nihil dolorum accusamus nesciunt. Veritatis
          voluptatum suscipit impedit facere non perferendis esse natus, illum
          fugit. Voluptatibus vel hic velit corporis eius architecto harum eos
          exercitationem obcaecati dignissimos?
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
