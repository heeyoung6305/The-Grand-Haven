import { useState } from 'react';

import { Combobox, useCombobox } from '@mantine/core';

import { TGHButton, TGHIcon } from '@/components';
import { ITGHComboBox } from '@/types';

import styles from './TGHComboBox.module.css';

/**
 * TGH 콤보박스 컴포넌트
 * @param data
 * @param isTransparent
 * @param props
 * @constructor
 */
const TGHComboBox = ({ data, isTransparent = false, ...props }: ITGHComboBox) => {
  /** combobox 선택 값 state */
  const [comboboxValue, setComboboxValue] = useState<string>(data[0].value);

  /** combobox hook */
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  /** combobox options */
  const options = data.map((item) => (
    <Combobox.Option value={item.value} key={item.value} p={5}>
      {item.label}
    </Combobox.Option>
  ));

  /** 선택한 combobox 데이터 라벨 추출 */
  const selectedLabel = data.find((item) => item.value === comboboxValue)?.label || '';

  /** combobox open 함수 */
  const handleComboboxDropdown = () => {
    combobox.toggleDropdown();
  };

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setComboboxValue(val);
        combobox.closeDropdown();
      }}
      radius={10}
    >
      <Combobox.Target>
        <TGHButton
          className={styles.combobox_btn}
          label={selectedLabel}
          w={props.w}
          rightSection={<TGHIcon icon={'comboboxChevron'} width={9} height={7} />}
          onClick={() => handleComboboxDropdown()}
          data-transparent={isTransparent}
        />
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default TGHComboBox;
