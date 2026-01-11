import { BackgroundImage, Box, Button, Flex, Text, Title } from '@mantine/core';

import { HOTEL_HERO_MAP } from '@/assets/data/reservationData';
import { HotelReservationEnum } from '@/enums';

import styles from './TGHHotelHero.module.css';

interface ITGHHeroProps {
  reservationId: HotelReservationEnum;
}
const TGHHotelHero = ({ reservationId }: ITGHHeroProps) => {
  const hero = HOTEL_HERO_MAP[reservationId];

  if (!hero) return null;
  return (
    <Box>
      <BackgroundImage className={styles.hotel_hero_img} src={hero.imgData?.src ?? ''}>
        <Flex className={styles.hotel_hero}>
          <Title className={styles.hotel_hero_title}>{hero.title}</Title>
          <Text className={styles.hotel_hero_description}>{hero.description}</Text>
        </Flex>
        <Button className={styles.hotel_hero_reserve_btn}>지금 예약</Button>
      </BackgroundImage>
    </Box>
  );
};
export default TGHHotelHero;
