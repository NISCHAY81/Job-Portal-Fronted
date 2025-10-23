import React from 'react';
import { talents } from '../../public/Data/TalentData';
import TalentCard from '../FindTalent/TalentCard';

const CompanyEmployee = () => {
  return (
    <div className="bg-mine-shaft-950 text-white font-['Poppins'] mt-10 p-4 ">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-brightSun-400 mb-6">
        Company Employees
      </h2>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {talents.slice(0, 9).map((talent, index) => (
          <TalentCard
            key={index}
            image={talent.image}
            role={talent.role}
            name={talent.name}
            company={talent.company}
            topSkills={talent.topSkills}
            location={talent.location}
            about={talent.about}
            expectedCtc={talent.expectedCtc}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyEmployee;
