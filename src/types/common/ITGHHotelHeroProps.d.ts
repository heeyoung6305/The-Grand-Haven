import { StaticImageData } from 'next/image';

interface IHotelHeroInfo {
  imgData?: StaticImageData;
  title: string;
  description: string;
}

interface IHotelVisualInfo {
  imgData?: StaticImageData;
}

interface IHotelDescriptionInfo {
  descImgData1?: StaticImageData;
  descImgData2?: StaticImageData;
}
