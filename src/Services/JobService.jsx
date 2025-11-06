import axios from "axios";

const base_url = "http://localhost:8080/jobs/";

const postJob = async (job) => {
  const result = await axios.post(`${base_url}post`, job);
  return result.data;
};

const getAllJobs = async () => {
  const result = await axios.get(`${base_url}getAll`);
  return result.data;
};

const getJobs = async (id) => {
  const result = await axios.get(`${base_url}get/${id}`);
  return result.data;
};

export { postJob, getAllJobs, getJobs };
