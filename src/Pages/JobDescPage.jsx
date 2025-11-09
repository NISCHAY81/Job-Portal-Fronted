import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import JobDesc from "./../JobDesc/JobDesc";
import RecommendedJob from "./../JobDesc/RecommendedJob";
import { useEffect, useState } from "react";
import { getJobs } from "../Services/JobService";

const JobDescPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    getJobs(id)
      .then((res) => {
        setJob(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-[poppins] p-4">
      <Link to="/find-jobs" className="my-4 inline-block">
        <Button
          leftSection={<IconArrowLeft />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="flex gap-5 justify-around">
        <JobDesc {...job} />
        <RecommendedJob />
      </div>
    </div>
  );
};

export default JobDescPage;
