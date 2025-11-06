import {
  IconDeviceFloppy,
  IconPencil,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { ActionIcon } from "@mantine/core";
import CertiCard from "./CertiCard";
import CertiInput from "./CertiInput";
import { useSelector } from "react-redux";

const Certificate = () => {
  const profile = useSelector((state) => state.profile);
  const [edit, setEdit] = useState(false);
  const [addCerti, setAddCerti] = useState(false);
  const handleEdit = () => {
   setEdit(!edit)
  };
  return (
    <>
      <div className="text-2xl font-semibold mb-3 flex justify-between items-center">
        Certifications
        <div className="flex gap-2">
          <ActionIcon
            variant="subtle"
            color="brightSun.4"
            size="lg"
            onClick={() => setAddCerti(true)}
          >
            <IconPlus className="h-4/5 w-4/5" />
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            color={edit ? "red.8" : "brightSun.4"}
            size="lg"
            onClick={handleEdit}
          >
            {edit ? <IconX /> : <IconPencil className="h-4/5 w-4/5" />}
          </ActionIcon>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {(profile.certifications ?? []).map((certi, index) => (
          <CertiCard key={index} index={index} {...certi} edit={edit} />
        ))}
        {addCerti && <CertiInput setEdit={setAddCerti} />}
      </div>
    </>
  );
};

export default Certificate;
