import { Flex, Image } from '@mantine/core';

import { hotelDescription01, hotelDescription012 } from '@/assets';
import { TGHHotelDescriptionText } from '@/components';

import styles from './TGHHotelDescription.module.css';

const TGHHotelDescription = () => (
  <Flex className={styles.hotel_description}>
    <Flex className={styles.hotel_description_img}>
      <Image radius="none" w="auto" fit="none" src={hotelDescription01.src} />
      <Image radius="none" w="auto" fit="none" src={hotelDescription012.src} />
    </Flex>
    <TGHHotelDescriptionText />
  </Flex>
);
export default TGHHotelDescription;
