import type { ComboboxProps } from '@mantine/core';
import type { ITGHStyleProps } from '@/types';

export interface ITGHComboBox extends ComboboxProps, ITGHStyleProps {
  data: IComboboxData[];
  isTransparent?: boolean;
}

export interface IComboboxData {
  value: string;
  label: string;
}
