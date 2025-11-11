import { Button, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput } from '@mantine/core'
import { IconPaperclip } from '@tabler/icons-react';
import React, { useState } from 'react'
import { isNotEmpty, useForm } from '@mantine/form';
import { getBase64 } from '../Services/Utlities';
import { applyJob } from '../Services/JobService';
import { useNavigate, useParams } from 'react-router-dom';
import { errorNotification, successNotification } from '../Services/NotificationService';
import { useSelector } from 'react-redux';

const ApplicationForm = () => {
  const { id } = useParams();
  const [preview, setPreview] = useState(false);
  const [submit, setSubmit] = useState(false);
  const user = useSelector((state)=>state.user);
  const navigate = useNavigate();

  const form = useForm({
    mode: 'controlled',
    validateInputOnChange: true,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      website: '',
      resume: {},
      coverLetter: ''
    },
    validate: {
      name: isNotEmpty('Name cannot be empty'),
      email: isNotEmpty('Email cannot be empty'),
      phone: isNotEmpty('Phone cannot be empty'),
      website: isNotEmpty('Website cannot be empty'),
      resume: isNotEmpty('Resume cannot be empty')
    }
  });


  const handleSubmit = async () => {
    setSubmit(true);
    try {
      let resume = await getBase64(form.getValues().resume);
      let applicant = { ...form.getValues(), applicantId: user.id, resume: resume }; // ✅ fixed line (removed split)

      await applyJob(id, applicant);
      setSubmit(false);
      successNotification("Success", "Application sent successfully");
      navigate("/job-history")
    } catch (err) {
      setSubmit(false);
      errorNotification("Error", err.response.data.errorMessage);
    }
  };

  const handlePreview = () => {
    form.validate();
    if (!form.isValid()) return;
    setPreview(!preview);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <LoadingOverlay
        className='[&>span]:!fixed [&>span]:top-1/2'
        visible={submit}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'brightSun.4', type: 'bars' }}
      />
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-mine-shaft-200 mb-6">
          Submit Your Application
        </h3>

        <div className="flex gap-6 mb-6">
          <TextInput
            {...form.getInputProps('name')}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            label="Full Name"
            placeholder="Enter your name"
            withAsterisk
          />
          <TextInput
            {...form.getInputProps('email')}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            label="Email"
            placeholder="Enter your email"
            withAsterisk
          />
        </div>

        <div className="flex gap-6 mb-6">
          <NumberInput
            {...form.getInputProps('phone')}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            label="Phone Number"
            placeholder="Enter your phone number"
            withAsterisk
            hideControls
            min={0}
            max={9999999999}
            clampBehavior="strict"
          />
          <TextInput
            {...form.getInputProps('website')}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            label="Personal Website"
            placeholder="Enter your portfolio or website URL"
          />
        </div>

        <div className="mb-6">
          <FileInput
            {...form.getInputProps('resume')}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
            withAsterisk
            leftSection={<IconPaperclip stroke={1.5} />}
            label="Attach your CV"
            placeholder="Upload your CV or resume"
            leftSectionPointerEvents="none"
          />
        </div>

        <div className="mb-8">
          <Textarea
            {...form.getInputProps('coverLetter')}
            withAsterisk
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""} mt-2`}
            placeholder="Type something about yourself..."
            label="Cover Letter"
            autosize
            minRows={4}
          />
        </div>

        {!preview && (
          <Button
            fullWidth
            onClick={handlePreview}
            color="brightSun.4"
            variant="light"
            className="w-full"
          >
            Preview Application
          </Button>
        )}

        {preview && (
          <div className='flex gap-10 [&>*]:w-1/2'>
            <Button
              fullWidth
              onClick={handlePreview}
              color="brightSun.4"
              variant="outline"
              className="w-full"
            >
              Edit
            </Button>
            <Button
              fullWidth
              onClick={handleSubmit}
              color="brightSun.4"
              variant="light"
              className="w-full"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationForm;
