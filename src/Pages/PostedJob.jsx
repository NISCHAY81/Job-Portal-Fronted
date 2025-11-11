import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

import { useNavigate, useParams } from "react-router-dom";
import JobPosted from "../PostedJob/JobPosted";
import PostedJobDesc from "../PostedJob/PostedJobDesc";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getJobPostedBy } from "../Services/JobService";

const PostedJob = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const [jobList, setJobList] = useState([]);
  const [job, setJob] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll(0, 0);
    getJobPostedBy(user.id)
      .then((res) => {
        setJobList(res);
        if(res && res.length>0 && Number(id)==0)navigate(`/posted-jobs/${res[0].id}`)
        setJob(res.find((item) => item.id == id));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['Poppins'] p-6 text-white">
      <Button
        color="brightSun.4"
        my="md"
        onClick={() => navigate(-1)}
        leftSection={<IconArrowLeft size={20} />}
        variant="light"
      >
        Back
      </Button>
      <div className="flex gap-5 justify-between">
        <JobPosted job={job} jobList={jobList} />
        <PostedJobDesc {...job} />
      </div>
    </div>
  );
};

export default PostedJob;
