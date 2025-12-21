import {
  grandDeluxeSuite01,
  grandDeluxeSuite02,
  grandDeluxeSuite03,
  premiumDeluxe01,
  premiumDeluxe02,
  premiumDeluxe03,
  royalSuite01,
  royalSuite02,
  royalSuite03,
} from '@/assets';
import { HotelReservationEnum } from '@/enums';

import type { ITGHRoomSimpleInfo } from '@/types';

const ROOM_SIMPLE_INFO_BOX_DATA: ITGHRoomSimpleInfo[] = [
  {
    id: HotelReservationEnum.PREMIUM_DELUXE,
    title: '프리미엄 디럭스',
    description: '한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스 객실',
    imgData: [premiumDeluxe01, premiumDeluxe02, premiumDeluxe03],
    subTitle: '프리미엄 디럭스',
    subDescription:
      '큰 창으로 들어오는 빛과 여유롭게 펼쳐진 공간이\n' + '어우러져 하루의 흐름이 편안해지는 프리미엄 디럭스',
    area: '45㎡',
    person: '성인 2인 기준',
    bedType: 'KING',
  },
  {
    id: HotelReservationEnum.GRAND_DELUXE,
    title: '그랜드 디럭스 스위트',
    description: '클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트 객실',
    imgData: [grandDeluxeSuite01, grandDeluxeSuite02, grandDeluxeSuite03],
    subTitle: '그랜드 디럭스 스위트',
    subDescription: '은은한 조명과 깊이 있는 색감 속에서 공간의\n' + '결을 천천히 느끼게 되는 그랜드 디럭스 스위트',
    area: '68㎡',
    person: '성인 2인 기준',
    bedType: 'KING / TWIN',
  },
  {
    id: HotelReservationEnum.ROYAL_SUIT,
    title: '로열 스위트',
    description: '감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트 객실',
    imgData: [royalSuite01, royalSuite02, royalSuite03],
    subTitle: '로열 스위트',
    subDescription: '차분한 분위기 속에 섬세한 디테일이 더해져\n' + '머무는 순간마다 깊은 인상이 남는 로열 스위트',
    area: '99㎡',
    person: '성인 4인 기준',
    bedType: 'KING / TWIN',
  },
];

export { ROOM_SIMPLE_INFO_BOX_DATA };
