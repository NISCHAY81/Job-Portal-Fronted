
import { Divider } from '@mantine/core'
import SearchBar from './../FindTalent/SearchBar';
import TalentCard from '../FindTalent/TalentCard';
import Talent from '../FindTalent/Talent';
const FindTalent = () => {
  return (
     <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins]'> 
     <Divider size="xs" mx="md"/>
      <SearchBar/>
      <Talent/>
     </div>
  )
}

export default FindTalent
