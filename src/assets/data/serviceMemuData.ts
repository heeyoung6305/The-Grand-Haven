import { LanguageEnum, ServiceIdEnum, ServiceMenuEnum } from '@/enums';
import { ITGHLanguageData, ITGHMenuNav } from '@/types';

/**
 * 서비스 메뉴 DATA
 */
const SERVICE_MENU_DATA: ITGHMenuNav[] = [
  { code: ServiceMenuEnum.EXPERIENCE, name: 'EXPERIENCE' },
  { code: ServiceMenuEnum.HOTEL, name: 'HOTEL', link: ServiceIdEnum.ROOM },
  { code: ServiceMenuEnum.DINING, name: 'DINING', link: ServiceIdEnum.DINING },
  { code: ServiceMenuEnum.ART_COLLECTION, name: 'ART COLLECTION', link: ServiceIdEnum.ART_COLLECTION },
  { code: ServiceMenuEnum.GALLERY, name: 'GALLERY' },
];

const LANGUAGE_DATA: ITGHLanguageData[] = [
  { value: LanguageEnum.KOREAN, label: 'KR' },
  { value: LanguageEnum.ENGLISH, label: 'ENG' },
];

export { SERVICE_MENU_DATA, LANGUAGE_DATA };
