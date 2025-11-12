import React, { useEffect } from 'react';
import SelectInput from './SelectInput';
import { fields } from '../../public/Data/PostJob';
import { Button, NumberInput, TagsInput, Textarea } from '@mantine/core'; 
import TextEditor from './TextEditor';
import { isNotEmpty, useForm } from '@mantine/form';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { getJobs, postJob } from '../Services/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PostJob = () => {
  const{id} = useParams();
   const user = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const select = fields;
  useEffect(() => {
    window.scrollTo(0,0);
    if(id!=="0"){
      getJobs(id).then((res)=>{
        form.setValues(res);
      }).catch((err)=>{
        console.log(err);       
      })
    }
    else
      form.reset();
  }, [id]);
   const form = useForm({
   mode:'controlled',
   validateInputOnChange:true,
   initialValues:{
    jobTitle:'',
    company:'',
    experience:'',
    jobType:'',
    location:'',
    packageOffered:'',
    skillsRequired:[],
    about:'',
    description:''
   },
   validate:{
    jobTitle: isNotEmpty('Title is required'),
    company: isNotEmpty('company is required'),
    experience: isNotEmpty('experience is required'),
    jobType: isNotEmpty('jobType is required'),
    location: isNotEmpty('location is required'),
    packageOffered: isNotEmpty('packageOffered is required'),
    skillsRequired: isNotEmpty('skillsRequired is required'),
    about: isNotEmpty('about is required'),
    description: isNotEmpty('Description in required')
   }
   });

 const handlePost = () => {
  const validation = form.validate();
  if (validation.hasErrors) return;

  postJob({...form.getValues(),id,postedBy:user.id,jobStatus:"ACTIVE"} )
    .then((res) => {
      successNotification("Success", "Job Posted Successfully");
     navigate(`/posted-jobs/${res.id}`)
    })
    .catch((err) => {
      console.error(err);
      errorNotification("Error", err.response?.data?.errorMessage);
    });
};

 const handleDraft = () => {
  postJob({...form.getValues(),id,postedBy:user.id,jobStatus:"DRAFT"} )
    .then((res) => {
      successNotification("Success", "Job Drafted  Successfully");
      navigate(`/posted-jobs/${res.id}`)
    })
    .catch((err) => {
      console.error(err);
      errorNotification("Error", err.response?.data?.errorMessage );
    });
};


  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold mb-10">Post a Job</div>

      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="jobTitle"{...select[0]} />
          <SelectInput form={form} name="company"{...select[1]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="experience"{...select[2]} />
          <SelectInput form={form} name="jobType"{...select[3]} />
        </div>

        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput form={form} name="location"{...select[4]} />
        <NumberInput 
        {...form.getInputProps('packageOffered')}
        label="salary" withAsterisk placeholder='Enter Salary' 
        min={1}
        max={300}
        clampBehavior='strict'
        hideControls/>
        </div>

        <TagsInput
        {...form.getInputProps('skillsRequired')}
        withAsterisk
          label="Skills"
          placeholder="Enter skill"
          clearable
          acceptValueOnBlur
          splitChars={[',',' ','|']}
        />
             <Textarea
                {...form.getInputProps("about")}
                withAsterisk
                label="About Job"
                autosize
                minRows={3}
                placeholder="Enter about Job"
              />
        <div>
          <div className='text-sm font-medium'>Job Description <span className='text-red-500'>*</span></div>
          <TextEditor form={form} />
        </div>
      <div className='flex gap-2'>
         <Button onClick={handlePost} color="brightSun.4" variant="light">Publish</Button>
          <Button  color="brightSun.4" variant="outline" onClick={handleDraft}>Save as Draft</Button>
      </div>
      </div>
    </div>
  );
};

export default PostJob;
