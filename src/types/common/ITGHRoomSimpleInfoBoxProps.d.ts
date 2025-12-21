import { StaticImageData } from 'next/image';

export interface ITGHRoomSimpleInfo {
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
