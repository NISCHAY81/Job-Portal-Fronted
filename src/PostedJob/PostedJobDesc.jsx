import { Badge, Tabs } from '@mantine/core';
import React from 'react';
import JobDesc from '../JobDesc/JobDesc';
import TalentCard from '../FindTalent/TalentCard';

const PostedJobDesc = (props) => {
  
console.log("applicationStatus:", props.applicants);

  return (
    <div className="mt-5 w-3/4 px-5">
    {props.jobTitle?<>
      <div className="text-2xl font-semibold mb- flex items-center">
        {props.jobTitle}
        <Badge variant="light" ml="sm" color="brightSun.4" size="sm">
          {props.jobStatus}
        </Badge>
      </div>
      <div className="font-medium text-mine-shaft-300">{props.location}</div>

      <div>
        <Tabs variant="outline" radius="lg" defaultValue="overview">
          <Tabs.List className='[&_button]:text-lg font-semibold mb-5 [&_button[data-active="true"]]:text-bright-sun-400'>
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
            <Tabs.Tab value="offered">Offered</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc {...props} edit />
          </Tabs.Panel>

          {/* Applicants */}
          <Tabs.Panel value="applicants">
            <div className="flex mt-10 flex-wrap gap-5 justify-around">
              {props.applicants
                ?.filter((x) => x.applicationStatus === "APPLIED")
                .map((talent, index) => 
                  <TalentCard key={index} {...talent}
                  />)}
            </div>
          </Tabs.Panel>

          {/* Invited */}
          <Tabs.Panel value="invited">
            <div className="flex mt-10 flex-wrap gap-5 justify-around">
              {props.applicants
                ?.filter((x) => x.applicationStatus === "INTERVIEWING")
                .map((talent, index) => 
                  <TalentCard
                    key={index}
                    {...talent}
                  />
                )}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="offered">
            <div className="flex mt-10 flex-wrap gap-5 justify-around">
              {props.applicants
                ?.filter((x) => x.applicationStatus === "OFFERED")
                .map((talent, index) => 
                  <TalentCard
                    key={index}
                    {...talent}
                  />
                )}
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="rejected">
            <div className="flex mt-10 flex-wrap gap-5 justify-around">
              {props.applicants
                ?.filter((x) => x.applicationStatus === "REJECTED")
                .map((talent, index) => 
                  <TalentCard
                    key={index}
                    {...talent}
                  />
                )}
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
      </>: <div className="text-2xl font-semibold flex justify-center items-center min-h-[50vh] text-mine-shaft-400">
        No Job Selected
      </div>}
    </div>
  );
};

export default PostedJobDesc;
