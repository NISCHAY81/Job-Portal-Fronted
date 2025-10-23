import React from 'react';
import CompanyCard from './CompanyCard';
import { similar } from '../../public/Data/Company';

const SimilarCompany = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5 text-brightSun-400">
        Similar Companies
      </h2>

      <div className="flex flex-col gap-4">
        {similar.map((company, index) => (
          <CompanyCard key={index} {...company} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCompany;
