import type { ComboboxProps } from '@mantine/core';

export interface ITGHComboBox extends ComboboxProps {
  data: IComboboxData[];
}

export interface IComboboxData {
  value: string;
  label: string;
}
