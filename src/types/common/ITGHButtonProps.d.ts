import { ReactNode } from 'react';

import type { ButtonProps } from '@mantine/core';

export interface ITGHButton extends ButtonProps {
  label: ReactNode;
  onClick?: () => void;
}
