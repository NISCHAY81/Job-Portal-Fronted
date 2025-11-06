import { ActionIcon, Textarea } from '@mantine/core'
import { IconCheck, IconDeviceFloppy, IconPencil, IconX } from '@tabler/icons-react'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { successNotification } from '../Services/NotificationService'
import { changeProfile } from '../Slices/ProfileSlice'

const About = () => {
  const dispatch = useDispatch();
    const profile = useSelector((state)=>state.profile);
    const [about, setAbout] = useState("");
          const [edit, setEdit] = useState(false);
            const handleEdit=()=>{
        if(!edit){
          setEdit(true)
          setAbout(profile.about)
        }
        else{
          setEdit(false)
        }
       }
       const handleSave = ()=> {
 setEdit(false)
          let updatedProfile={...profile, about:about}
          dispatch(changeProfile(updatedProfile))
         successNotification("Sucess", "About updated Successfully");
       }
  return (
    <>
       <div className="px-3">
             <div className="text-2xl font-semibold mb-3 flex justify-between items-center">
               About
                <div>
          {edit && <ActionIcon
            variant="subtle"
            color="green.8"
            size="lg"
            onClick={handleSave}
          >
            {edit ? <IconCheck /> : <IconDeviceFloppy className="h-4/5 w-4/5" />}
          </ActionIcon>}

          <ActionIcon
            variant="subtle"
            color={edit?"red.8":"brightSun.4"}
            size="lg"
            onClick={ handleEdit}
          >
            {edit ? <IconX /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
          </div>
             </div>
     
             {edit ? (
               <Textarea
                 autosize
                 minRows={3}
                 placeholder="Enter about yourself"
                 value={about}
                 onChange={(event) => setAbout(event.currentTarget.value)}
               />
             ) : (
               <div className="text-sm text-mine-shaft-300 text-justify leading-relaxed">
                 {profile.about}
               </div>
             )}
           </div> 
    </>
  )
}

export default About
