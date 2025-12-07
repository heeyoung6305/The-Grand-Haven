import { ReactNode } from 'react';

import { LanguageEnum, ServiceIdEnum, ServiceMenuEnum } from '@/enums';

export interface ITGHMenuNav {
  code: ServiceMenuEnum;
  name: ReactNode;
  link?: ServiceIdEnum;
}

export interface ITGHLanguageData {
  value: LanguageEnum;
  label: string;
}
