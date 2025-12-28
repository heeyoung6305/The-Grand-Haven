import { Flex, Image } from '@mantine/core';

import { hotelDescriptionLabel } from '@/assets';
import { HOTEL_DESCRIPTION_MAP } from '@/assets/data/reservationData';
import { TGHHotelDescriptionText } from '@/components';
import { HotelReservationEnum } from '@/enums';

import styles from './TGHHotelDescription.module.css';

interface ITGHHotelDescriptionProps {
  reservationId: HotelReservationEnum;
}
const TGHHotelDescription = ({ reservationId }: ITGHHotelDescriptionProps) => {
  const desc = HOTEL_DESCRIPTION_MAP[reservationId];

  if (!desc) return null;
  return (
    <Flex className={styles.hotel_description} bg={'#fffcf6'}>
      <Image
        className={styles.hotel_description_background_img}
        w="auto"
        fit="none"
        src={hotelDescriptionLabel.src}
        alt={''}
      />
      <Flex className={styles.hotel_description_img}>
        <Image radius="none" w="auto" fit="none" src={desc.descImgData1.src} alt={''} />
        <Image radius="none" w="auto" fit="none" src={desc.descImgData2.src} alt={''} />
      </Flex>
      <TGHHotelDescriptionText />
    </Flex>
  );
};
export default TGHHotelDescription;
