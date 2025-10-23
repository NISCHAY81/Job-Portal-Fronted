import { Button, Select, TextInput } from "@mantine/core";
import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../../public/Data/PostJob";
import { MonthPickerInput } from '@mantine/dates';

const CertiInput = (props) => {
  const select = fields;
  const [issueDate, setIssueDate] = useState(null);
  return (
    <div className="flex flex-col gap-3">
      <div>Add Certificate</div>
      <div className="flex gap-10 [&>*]: w-1/2">
        <TextInput label="title" withAsterisk placeholder="Enter Title" />
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]: w-1/2">
        <MonthPickerInput 
             
                maxDate={new Date()}
               label="issue Date"
               placeholder="Pick Date"
               value={issueDate} onChange={setIssueDate} />
               <TextInput label="Certificate Id" withAsterisk placeholder="Enter Id"/>
      </div>
      <div className=" flex gap-5">
        <Button
          onClick={() => props.setEdit(false)}
          color="brightSun.4"
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
