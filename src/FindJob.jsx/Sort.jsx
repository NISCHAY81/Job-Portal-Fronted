
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box, ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react'; // ✅ added missing import

const opt = ['Relevance','Most Recent', 'Salary(Low to High)','Salary(High to Low)'];

const Sort =() => {
  const [selectedItem, setSelectedItem] = useState('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='!text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        {/* ✅ JSX fix: Wrap multiple elements in one parent */}
        <Combobox.Target>
          <div>
            <div onClick={()=>combobox.toggleDropdown()} className="border border-bright-sun-400 flex items-center gap-2 px-2 py-1 rounded-xl mt-2 cursor-pointer text-sm">
              {selectedItem} 
              <ActionIcon color='brightSun.4' variant='transparent' aria-label='settings'>
                <IconAdjustments  className='text-bright-sun-400 h-7 w-7'/>
              </ActionIcon>
            </div>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

export default Sort;
