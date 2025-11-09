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

const applyJob = async(id,applicant)=>{
  return axios.post(`${base_url}apply/${id}`,applicant)
  .then(result=>result.data)
  .catch(error=>{throw error;})
}

const getJobPostedBy=async(id)=>{
  return axios.get(`${base_url}postedBy/${id}`)
  .then(result => result.data)
  .catch(error=>{throw error;})
}

const changeAppStatus=async(application)=>{
  return axios.post(`${base_url}changeAppStatus`,application)
  .then(result => result.data)
  .catch(error=>{throw error;})
}

export { postJob, getAllJobs, getJobs,applyJob,getJobPostedBy,changeAppStatus};
