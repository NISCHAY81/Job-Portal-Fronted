import { Button, Select, TextInput } from "@mantine/core";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../public/Data/PostJob";
import { MonthPickerInput } from '@mantine/dates';
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../Services/NotificationService";
import { changeProfile } from "../Slices/ProfileSlice";

const CertiInput = (props) => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.profile);
   const form = useForm({
      mode: "controlled",
      validateInputOnChange: true,
      initialValues: {
        name: "",
        issuer: "",
        issueDate: new Date(),
        certificateId:'',
       
      },
      validate: {
        name: isNotEmpty("Name is required"),
        issuer: isNotEmpty("issure is required"),
        issueDate: isNotEmpty("issueDate is required"),
        certificateId: isNotEmpty("certificateID is required"),
      },
    });
    const handleSave =()=>{
    form.validate();
    if (!form.isValid()) return;
 let certi = [...profile.certifications];
 certi.push(form.getValues());
 certi[certi.length-1].issueDate=certi[certi.length-1].issueDate.toISOString();
 let updatedProfile = {...profile, certifications:certi};
  props.setEdit(false);
   dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Certificate updated successfully");
  }
  const select = fields;
  const [issueDate, setIssueDate] = useState(null);
  return (
    <div className="flex flex-col gap-3">
      <div>Add Certificate</div>
      <div className="flex gap-10 [&>*]: w-1/2">
        <TextInput {...form.getInputProps("name")} label="title" withAsterisk placeholder="Enter Title" />
        <SelectInput form={form} name="issuer" {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]: w-1/2">
        <MonthPickerInput 
             {...form.getInputProps("issueDate")}
                maxDate={new Date()}
               label="issue Date"
               placeholder="Pick Date"
               value={issueDate} onChange={setIssueDate} />
               <TextInput 
               {...form.getInputProps("certificateId")}
               label="Certificate Id" withAsterisk placeholder="Enter Id"/>
      </div>
      <div className=" flex gap-5">
        <Button
          onClick={handleSave}
          color="green.8"
          variant="outline"
        >
          Save
        </Button>
        <Button
          onClick={() => props.setEdit(false)}
          color="red.4"
          variant="light"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;
