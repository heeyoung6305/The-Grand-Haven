import {
  hotelDescription01,
  hotelDescription012,
  hotelDescription02,
  hotelDescription022,
  hotelDescription03,
  hotelDescription032,
  hotelHero01,
  hotelHero02,
  hotelHero03,
  hotelVisual01,
  hotelVisual02,
  hotelVisual03,
} from '@/assets';
import { HotelReservationEnum } from '@/enums';
import { IHotelDescriptionInfo, IHotelHeroInfo, IHotelVisualInfo } from '@/types/common/ITGHHotelHeroProps';

const HOTEL_HERO_MAP: Record<HotelReservationEnum, IHotelHeroInfo> = {
  [HotelReservationEnum.DEFAULT]: {
    title: '',
    description: '',
  },
  [HotelReservationEnum.PREMIUM_DELUXE]: {
    imgData: hotelHero01,
    title: 'PREMIUM DELUXE',
    description: '한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스',
  },
  [HotelReservationEnum.GRAND_DELUXE]: {
    imgData: hotelHero02,
    title: 'GRAND DELUXE SUITE',
    description: '클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트',
  },
  [HotelReservationEnum.ROYAL_SUIT]: {
    imgData: hotelHero03,
    title: 'ROYAL SUITE',
    description: '감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트',
  },
};

const HOTEL_VISUAL_MAP: Record<HotelReservationEnum, IHotelVisualInfo> = {
  [HotelReservationEnum.DEFAULT]: {},
  [HotelReservationEnum.PREMIUM_DELUXE]: { imgData: hotelVisual01 },
  [HotelReservationEnum.GRAND_DELUXE]: { imgData: hotelVisual02 },
  [HotelReservationEnum.ROYAL_SUIT]: { imgData: hotelVisual03 },
};

const HOTEL_DESCRIPTION_MAP: Record<HotelReservationEnum, IHotelDescriptionInfo> = {
  [HotelReservationEnum.DEFAULT]: {},
  [HotelReservationEnum.PREMIUM_DELUXE]: {
    descImgData1: hotelDescription01,
    descImgData2: hotelDescription012,
  },
  [HotelReservationEnum.GRAND_DELUXE]: {
    descImgData1: hotelDescription02,
    descImgData2: hotelDescription022,
  },
  [HotelReservationEnum.ROYAL_SUIT]: {
    descImgData1: hotelDescription03,
    descImgData2: hotelDescription032,
  },
};

export { HOTEL_HERO_MAP, HOTEL_VISUAL_MAP, HOTEL_DESCRIPTION_MAP };
