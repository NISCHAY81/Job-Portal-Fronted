import React from 'react'
import { ActionIcon, Button, Divider } from '@mantine/core'
import { IconBookmark } from '@tabler/icons-react'
import { Link, useNavigate } from 'react-router-dom'  // ✅ Keep this import at the TOP
import { card, desc, skills } from '../../public/Data/JobDescData'
// @ts-ignore
import DOMPurify from "dompurify";

const JobDesc = (props) => {
  const data = DOMPurify.sanitize(desc);
  const navigate = useNavigate();

  return (
    <div className='w-2/3'>
      <div className='flex justify-between items-start'>
        <div className='flex gap-3 items-center'>
          <div className='p-3 bg-mine-shaft-800 rounded-xl'>
            <img className='h-14 object-contain' src={`/Icons/Google.png`} alt="" /> 
          </div>
          <div>
            <div className='font-semibold text-bright-sun-400 text-2xl'>Software Engineer</div>
            <div className='text-lg text-mine-shaft-400'>
              Google • 3 Days Ago • 48 applicants
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 items-center'>

          <Button
            color="brightSun.4"
            variant="light"
            size="sm"
            onClick={() => navigate('/apply-job')}
          >
           {props.edit?"Edit":"Apply"}
          </Button>

         {props.edit?<Button
            color="red.5"
            variant="outline"
            size="sm">
          Delete
          </Button>:<IconBookmark className='text-bright-sun-400 cursor-pointer hover:text-bright-sun-400 transition-colors duration-150' />}
        </div>
      </div>

      <Divider my="xl" />

      <div className='flex justify-between'>
        {card.map((item, index) => (
          <div key={index} className='flex flex-col items-center gap-1'>
            <ActionIcon 
              className='!h-12 !w-12' 
              color='brightSun.4' 
              variant="light" 
              size="lg" 
              radius="xl"
            >
              <item.icon className='h-4/5 w-4/5' stroke={1.5} />
            </ActionIcon>
            <div className='text-sm text-mine-shaft-300'>{item.name}</div>
            <div className='font-semibold'>{item.value}</div>
          </div>
        ))}
      </div>

      <Divider my="xl" />

      <div>
        <div className='text-xl font-semibold mb-5'>Required Skills</div>
        <div className='flex flex-wrap gap-2'>
          {skills.map((item, index) => (
            <ActionIcon 
              key={index} 
              color='brightSun.4' 
              className='!h-fit !w-fit font-medium !text-sm'  
              variant='light' 
              p="xs" 
              radius="xl"
            >
              {item}
            </ActionIcon>
          ))}
        </div>

        <Divider my="xl" />

        <div
          className='[&_h4]:text-xl [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-300 [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_p]:text-justify'
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>

      <Divider my="xl" />

      <div>
        <div className='text-xl font-semibold mb-5'>About the Company</div>

        <div className='flex justify-between items-start mb-3'>
          <div className='flex gap-3 items-center'>
            <div className='p-3 bg-mine-shaft-800 rounded-xl'>
              <img className='h-8 object-contain' src={`/Icons/Google.png`} alt="" /> 
            </div>
            <div className='flex flex-col gap-1'>
              <div className='font-semibold text-bright-sun-400 text-2xl'>Software Engineer</div>
              <div className='text-lg text-mine-shaft-400'>
                Google • 3 Days Ago • 48 applicants
              </div>
            </div>
          </div>


          <Link to="/company">
            <Button color="brightSun.4" variant="light" size="sm">
              Company page
            </Button>
          </Link>
        </div>

        <div className='text-mine-shaft-300 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          At voluptates commodi blanditiis ducimus nihil dolorum accusamus nesciunt. 
          Veritatis voluptatum suscipit impedit facere non perferendis esse natus, 
          illum fugit. Voluptatibus vel hic velit corporis eius architecto harum eos 
          exercitationem obcaecati dignissimos?
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
