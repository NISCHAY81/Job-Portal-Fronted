import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Select, Textarea } from "@mantine/core";
import { fields } from "../../public/Data/PostJob";
import { MonthPickerInput } from '@mantine/dates';

const ExpInput = (props) => {
  const select = fields;
   const [checked, setChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [desc, setDesc] = useState(
    "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">{props.add?"Add":"Edit" } Experience</div>
      <div className="flex gap-10 [&>*]: w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[4]} />
      <Textarea
      withAsterisk
      label="summary"
        autosize
        minRows={3}
        placeholder="Enter about Yourself"
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
      />
       <div className="flex gap-10 [&>*]: w-1/2">
       <MonthPickerInput 
       disabled={checked}
        maxDate={endDate || undefined}
       label="start Date"
       placeholder="Pick Date"
       value={startDate} onChange={setStartDate} />
        <MonthPickerInput 
        minDate={startDate || undefined}
        maxDate={new Date()}
       label="End Date"
       placeholder="Pick Date"
       value={endDate} onChange={setEndDate} />
       </div>
         <Checkbox
           checked={checked}
                 onChange={(event) => setChecked(event.currentTarget.checked)}
            autoContrast
            label="Currently working Here"
            />
            <div className=" flex gap-5">
                  <Button onClick={()=>props.setEdit(false)} color="brightSun.4" variant="outline">Save</Button>
                        <Button onClick={()=>props.setEdit(false)} color="red.4" variant="light">Cancel</Button>
                 </div>
    </div>
  );
};

export default ExpInput;
