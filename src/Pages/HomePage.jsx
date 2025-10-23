
import Companies from '../LandingProject/Companies'
import DreamJob from '../LandingProject/DreamJob'
import JobCategory from '../LandingProject/JobCategory'
import Subscribe from '../LandingProject/Subscribe'
import Testimonials from '../LandingProject/Testimonials'
import Working from '../LandingProject/Working'


const HomePage = () => {
  return (
   <div className='  bg-mine-shaft-950 font-["poppins]'>
    
     <DreamJob/>
     <Companies/>
     <JobCategory/>
     <Working/>
     <Testimonials/>
     <Subscribe/>
   </div>
  )
}

export default HomePage
