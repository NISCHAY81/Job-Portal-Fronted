import React, { useEffect } from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconArrowLeft } from '@tabler/icons-react';

import Company from './../CompanyProfile/Company';
import SimilarCompany from './../CompanyProfile/SimilarCompany';

const CompanyPage = () => {
  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['Poppins'] p-6 text-white">
      {/* Back Button */}
      <Button
        color="brightSun.4"
        my="md"
        onClick={() => navigate(-1)}
        leftSection={<IconArrowLeft size={20} />}
        variant="light"
      >
        Back
      </Button>

   
      <div className="flex flex-col lg:flex-row gap-6 mt-6">

        <div className="flex-1 ">
          <Company />
        </div>

      
        <div className="w-full lg:w-1/3">
          <SimilarCompany />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
