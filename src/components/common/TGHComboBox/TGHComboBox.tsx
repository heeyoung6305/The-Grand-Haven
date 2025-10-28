import { useState } from 'react';

import { Combobox, Text, useCombobox } from '@mantine/core';

import { ITGHComboBox } from '@/types';

const TGHComboBox = ({ data }: ITGHComboBox) => {
  const [comboboxValue, setComboboxValue] = useState<string>(data[0].value);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      {item.label}
    </Combobox.Option>
  ));

  const selectedLabel = data.find((item) => item.value === comboboxValue)?.label || '';

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setComboboxValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <Text onClick={() => combobox.toggleDropdown()}>{selectedLabel}</Text>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default TGHComboBox;
