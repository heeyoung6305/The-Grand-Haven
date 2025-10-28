import { ReactNode } from 'react';

import { LanguageEnum, ServiceMenuEnum } from '@/enums';

export interface ITGHMenuNav {
  code: ServiceMenuEnum;
  name: ReactNode;
}

export interface ITGHLanguageData {
  value: LanguageEnum;
  label: string;
}
