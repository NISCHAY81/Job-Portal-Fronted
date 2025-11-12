import React, { useEffect, useState } from 'react'
import Sort from '../FindJob.jsx/Sort'
import TalentCard from './TalentCard'
import { getAllProfiles } from '../Services/ProfileService'
import { useDispatch, useSelector } from 'react-redux'
import Skills from './../Profile/Skills';
import { resetFilter } from '../Slices/FilterSlice'

const Talent = () => {
const dispatch = useDispatch();
  const [talent, setTalent] = useState([]);
  const filter = useSelector((state) => state.filter);
  const [filteredTalents, setFilteredTalents] = useState([]);

  useEffect(() => {
    dispatch(resetFilter());
    getAllProfiles()
      .then((res) => setTalent(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    let filtered = talent;

    if (filter.name?.trim()) {
      filtered = filtered.filter((t) =>
        t.name?.toLowerCase().includes(filter.name.toLowerCase())
      );
    }
if (filter["Job Title"] && filter["Job Title"].length > 0) {
      filtered = filtered.filter((t) =>
        filter["Job Title"].some((title) =>
          t.jobTitle?.toLowerCase().includes(title.toLowerCase())
        )
      );
    }
   if (filter.Location && filter.Location.length > 0) {
      filtered = filtered.filter((t) =>
        filter.Location.some((location) =>
          t.location?.toLowerCase().includes(location.toLowerCase())
        )
      );
    }
   
     if (filter.Skills && filter.Skills.length > 0) {
      filtered = filtered.filter((t) =>
        Array.isArray(t.skills) &&
        filter.Skills.some((selectedSkill) =>
          t.skills.some(
            (talentSkill) =>
              talentSkill.toLowerCase().includes(selectedSkill.toLowerCase())
          )
        )
      );
    }

    if(filter.exp && filter.exp.length>0) {
      filtered = filtered.filter((t)=>filter.exp[0] <= t.totalExp && t.totalExp <= filter.exp[1]);
    }

    setFilteredTalents(filtered);
  }, [filter, talent]);

  return (
    <div className='p-6 md:p-10 bg-mine-shaft-950 min-h-screen text-mine-shaft-100'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
        <div className='text-2xl font-semibold tracking-wide'>Recommended Talents</div>
        <Sort />
      </div>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {filteredTalents.map((talent, index) => (
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};

export default Talent;
