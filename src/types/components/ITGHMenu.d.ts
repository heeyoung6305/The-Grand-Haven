import { ReactNode } from 'react';

import { ServiceMenuEnum } from '@/enums';

export interface ITGHMenuNav {
  code: ServiceMenuEnum;
  name: ReactNode;
}
