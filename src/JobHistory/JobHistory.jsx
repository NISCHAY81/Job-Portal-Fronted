import { Tabs } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getAllJobs } from '../Services/JobService'
import { useSelector } from 'react-redux'

const JobHistory = () => {
  const user = useSelector((state)=>state.user);
  const profile = useSelector((state)=>state.profile);
  const [activeTab, setActiveTab] = useState('APPLIED');
  const [jobList, setJobList] = useState([]);
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    getAllJobs()
      .then((res) => {
        setJobList(res);
        setShowList(
          res.filter((job) =>
            job.applicants?.some(
              (applicant) =>
                applicant.applicantId === user.id &&
                applicant.applicationStatus === 'APPLIED'
            )
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (value === 'SAVED') {
      setShowList(jobList.filter((job) => profile.savedJobs?.includes(job.id)));
    } else {
      setShowList(
        jobList.filter((job) =>
          job.applicants?.some(
            (applicant) =>
              applicant.applicantId === user.id &&
              applicant.applicationStatus === value
          )
        )
      );
    }
  };

  return (
    <div>
      <div className='text-2xl font-semibold mb-5'>Job History</div>
      <div>
        <Tabs variant='outline' radius='lg' value={activeTab} onChange={handleTabChange}>
          <Tabs.List className='[&_button]:text-lg font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
            <Tabs.Tab value='APPLIED'>Applied</Tabs.Tab>
            <Tabs.Tab value='SAVED'>Saved</Tabs.Tab>
            <Tabs.Tab value='OFFERED'>Offered</Tabs.Tab>
            <Tabs.Tab value='INTERVIEWING'>Interviewing</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value={activeTab} className='[&>div]:w-full'>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {showList.map((job, index) => (
                <Card key={index} {...job} {...{[activeTab.toLowerCase()]:true}} />
              ))}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobHistory;
