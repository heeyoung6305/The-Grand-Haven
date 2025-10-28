import { ServiceMenuEnum } from '@/enums';
import { ITGHMenuNav } from '@/types';

/**
 * 서비스 메뉴 DATA
 */
const SERVICE_MENU_DATA: ITGHMenuNav[] = [
  { code: ServiceMenuEnum.EXPERIENCE, name: 'EXPERIENCE' },
  { code: ServiceMenuEnum.HOTEL, name: 'HOTEL' },
  { code: ServiceMenuEnum.DINING, name: 'DINING' },
  { code: ServiceMenuEnum.ART_TAINMENT, name: 'ART_TAINMENT' },
  { code: ServiceMenuEnum.GALLERY, name: 'GALLERY' },
];

export { SERVICE_MENU_DATA };
