import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

const CompanyCard = (props) => {
  return (
    <div className="bg-mine-shaft-900 hover:bg-mine-shaft-800 transition-colors 
                    flex justify-between items-center rounded-xl p-4 border border-mine-shaft-800 shadow-sm">

      <div className="flex items-center gap-3">
    
        <div className="p-2 bg-mine-shaft-800 rounded-lg flex justify-center items-center">
          <img
            className="h-8 w-8 object-contain"
            src={`/Icons/${props.name}.png`}
            alt={`${props.name} logo`}
          />
        </div>

       
        <div className="flex flex-col">
          <span className="font-semibold text-sm text-white">{props.name}</span>
          <span className="text-xs text-mine-shaft-400">{props.employees}</span>
        </div>
      </div>

  
      <ActionIcon color="brightSun.4" variant="light" radius="xl">
        <IconExternalLink  />
      </ActionIcon>
    </div>
  );
};

export default CompanyCard;
