import { Button } from "@mantine/core"
import { useState } from "react"
import ExpInput from "./ExpInput";
import { formatDate } from "../Services/Utlities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../Slices/ProfileSlice";
import { successNotification } from "../Services/NotificationService";

const ExpCard = (props) => {
   const profile = useSelector((state) => state.profile);
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const handleDelete=()=>{
    let exp=[...profile.experiences];
    exp.splice(props.index, 1);
    let updatedProfile={...profile, experiences:exp};
     dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Experience Delete successfully");
  }
  return !edit?(
    <div className="flex flex-col gap-2">
     <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='p-2 bg-mine-shaft-800 rounded-md'>
            <img className ="h-7" src={`Icons/${props.company}.png`} alt="" />
          </div>
          <div className='flex flex-col gap-1'>
            <div className='font-semibold'>{props.title}</div>
            <div className='text-xs text-mine-shaft-300'>{props.company} &bull; {props.location}</div>
          </div>
        </div>
        <div className='text-sm text-mine-shaft-300'>
         {formatDate(props.startDate)} - {props.working?"Present":formatDate(props.endDate)}
        </div>
     </div>
     <div className="text-sm text-mine-shaft-300 text-justify">
     {props.description}
     </div>
   { props.edit && <div className=" flex gap-5">
      <Button onClick={()=>setEdit(true)} color="green.8" variant="outline">Edit</Button>
            <Button color="red.4" onClick={handleDelete} variant="light">Delete</Button>
     </div>}
    </div>
  ):<ExpInput {...props}  setEdit={setEdit}/>
}

export default ExpCard
