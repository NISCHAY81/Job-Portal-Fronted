import { Button, Divider} from '@mantine/core'
import { IconArrowLeft } from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom'
import JobPosted from '../PostedJob/JobPosted';
import PostedJobDesc from '../PostedJob/PostedJobDesc';

const PostedJob = () => {
 const navigate = useNavigate();
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
       <div className='flex gap-5 justify-between'>
           <JobPosted/>
       <PostedJobDesc/>
    </div>
    </div>
  )
}

export default PostedJob
