import React, { useEffect } from "react";
import SelectInput from "./SelectInput";
import { Button, Checkbox, Textarea } from "@mantine/core";
import { fields } from "../../public/Data/PostJob";
import { MonthPickerInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { successNotification } from "../Services/NotificationService";
import { changeProfile } from "../Slices/ProfileSlice";

const ExpInput = (props) => {
  const select = fields;
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const form = useForm({
    mode: "controlled",
    validateInputOnChange: true,
    initialValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      startDate: new Date(),
      endDate: new Date(),
      working: false,
    },
    validate: {
      title: isNotEmpty("Title is required"),
      company: isNotEmpty("Company is required"),
      location: isNotEmpty("Location is required"),
      description: isNotEmpty("Description is required"),
    },
  });

  useEffect(() => {
    if (!props.add) {
      form.setValues({
        title: props.title || "",
        company: props.company || "",
        location: props.location || "", // ✅ fixed lowercase
        description: props.description || "",
        startDate: props.startDate ? new Date(props.startDate) : new Date(), // ✅ safe conversion
        endDate: props.endDate ? new Date(props.endDate) : new Date(),       // ✅ safe conversion
        working: props.working || false,
      });
    }
  }, []);

  const handleSave = () => {
    form.validate();
    if (!form.isValid()) return;
    const formData = form.getValues();


    const formattedExp = {
      ...formData,
      startDate: formData.startDate.toISOString(),
      endDate: formData.endDate.toISOString(),
    };

    let exp = [...(profile.experiences || [])];

    if (props.add) {
      exp.push(formattedExp);
    } else {
      
      exp[props.index] = formattedExp;
    }

    const updatedProfile = { ...profile, experiences: exp };

    dispatch(changeProfile(updatedProfile));
    successNotification("Success", "Experience updated successfully");
    props.setEdit(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">
        {props.add ? "Add" : "Edit"} Experience
      </div>

      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput form={form} name="title" {...select[0]} />
        <SelectInput form={form} name="company" {...select[1]} />
      </div>

      <SelectInput form={form} name="location" {...select[4]} />

      <Textarea
        {...form.getInputProps("description")}
        withAsterisk
        label="Summary"
        autosize
        minRows={3}
        placeholder="Enter about Yourself"
      />

      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          {...form.getInputProps("startDate")}
          maxDate={form.values.endDate || undefined}
          label="Start Date"
          placeholder="Pick Date"
        />
        <MonthPickerInput
          {...form.getInputProps("endDate")}
          disabled={form.values.working} 
          minDate={form.values.startDate || undefined}
          maxDate={new Date()}
          label="End Date"
          placeholder="Pick Date"
        />
      </div>

      <Checkbox
        checked={form.values.working}
        onChange={(e) => form.setFieldValue("working", e.currentTarget.checked)}
        autoContrast
        label="Currently working Here"
      />

      <div className="flex gap-5">
        <Button onClick={handleSave} color="green.8" variant="light">
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

export default ExpInput;
