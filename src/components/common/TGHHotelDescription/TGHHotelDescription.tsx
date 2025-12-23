import { Flex, Image } from '@mantine/core';

import { hotelDescription01, hotelDescription012, hotelDescriptionLabel } from '@/assets';
import { TGHHotelDescriptionText } from '@/components';

import styles from './TGHHotelDescription.module.css';

const TGHHotelDescription = () => (
  <Flex className={styles.hotel_description} bg={'#fffcf6'}>
    <Image
      className={styles.hotel_description_background_img}
      w="auto"
      fit="none"
      src={hotelDescriptionLabel.src}
      alt={''}
    />
    <Flex className={styles.hotel_description_img}>
      <Image radius="none" w="auto" fit="none" src={hotelDescription01.src} alt={''} />
      <Image radius="none" w="auto" fit="none" src={hotelDescription012.src} alt={''} />
    </Flex>
    {/*<Image*/}
    {/*  className={styles.hotel_description_background_img}*/}
    {/*  w="auto"*/}
    {/*  fit="none"*/}
    {/*  src={hotelDescriptionLabel.src}*/}
    {/*  alt={''}*/}
    {/*/>*/}
    {/*<Flex className={styles.hotel_description_img}>*/}
    {/*  <Image radius="none" w="auto" fit="none" src={hotelDescription02.src} alt={''} />*/}
    {/*  <Image radius="none" w="auto" fit="none" src={hotelDescription022.src} alt={''} />*/}
    {/*</Flex>*/}
    {/*<Image*/}
    {/*  className={styles.hotel_description_background_img}*/}
    {/*  w="auto"*/}
    {/*  fit="none"*/}
    {/*  src={hotelDescriptionLabel.src}*/}
    {/*  alt={''}*/}
    {/*/>*/}
    {/*<Flex className={styles.hotel_description_img}>*/}
    {/*  <Image radius="none" w="auto" fit="none" src={hotelDescription03.src} alt={''} />*/}
    {/*  <Image radius="none" w="auto" fit="none" src={hotelDescription032.src} alt={''} />*/}
    {/*</Flex>*/}
    <TGHHotelDescriptionText />
  </Flex>
);
export default TGHHotelDescription;
