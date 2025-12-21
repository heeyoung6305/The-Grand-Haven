import { StaticImageData } from 'next/image';

import { HotelReservationEnum } from '@/enums';

export interface ITGHRoomSimpleInfo {
  id: HotelReservationEnum;
  title: string;
  description: string;
  imgData: StaticImageData[];
  subTitle: string;
  subDescription: string;
  area: string;
  person: string;
  bedType: string;
}

export interface ITGHRoomSimpleInfoBoxProps {
  data: ITGHRoomSimpleInfo;
}
