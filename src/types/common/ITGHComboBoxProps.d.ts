import type { ITGHStyleProps } from '@/types';
import type { ComboboxProps } from '@mantine/core';

export interface ITGHComboBox extends ComboboxProps, ITGHStyleProps {
  data: IComboboxData[];
  isTransparent?: boolean;
}

export interface IComboboxData {
  value: string;
  label: string;
}
