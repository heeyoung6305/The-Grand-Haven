import { ReactNode } from 'react';

import { HeaderMenuEnum } from '@/enums';

export interface ITGHHeaderMenu {
  code: HeaderMenuEnum;
  name: ReactNode;
  className?: string;
}
