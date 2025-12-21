import { BackgroundImage, Box, Button, Flex, Text, Title } from '@mantine/core';

import { HOTEL_HERO_MAP } from '@/assets/data/reservationData';
import { useMainStore } from '@/providers';

import styles from './TGHHotelHero.module.css';

const TGHHotelHero = () => {
  const { reservationId } = useMainStore((state) => state);

  if (!reservationId) return null;

  const hero = HOTEL_HERO_MAP[reservationId];

  if (!hero) return null;
  return (
    <Box>
      <BackgroundImage className={styles.hotel_hero_img} src={hero.imgData.src}>
        <Flex className={styles.hotel_hero}>
          <Title className={styles.hotel_hero_title}>{hero.title}</Title>
          <Text className={styles.hotel_hero_description}>{hero.description}</Text>
        </Flex>
        <Button className={styles.hotel_hero_reserve_btn}>지금 예약</Button>
      </BackgroundImage>
      {/*<BackgroundImage className={styles.hotel_hero_img} src={hotelHero02.src}></BackgroundImage>*/}
      {/*<Flex className={styles.hotel_hero}>*/}
      {/*  <Title className={styles.hotel_hero_title}>GRAND DELUXE SUITE</Title>*/}
      {/*  <Text className={styles.hotel_hero_description}>*/}
      {/*    클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트*/}
      {/*  </Text>*/}
      {/*</Flex>*/}
      {/*<BackgroundImage className={styles.hotel_hero_img} src={hotelHero03.src}></BackgroundImage>*/}
      {/*<Flex className={styles.hotel_hero}>*/}
      {/*  <Title className={styles.hotel_hero_title}>ROYAL SUITE</Title>*/}
      {/*  <Text className={styles.hotel_hero_description}>*/}
      {/*    감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트*/}
      {/*  </Text>*/}
      {/*</Flex>*/}
    </Box>
  );
};
export default TGHHotelHero;
