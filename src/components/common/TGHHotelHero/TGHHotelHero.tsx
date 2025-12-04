import { BackgroundImage, Box, Button, Flex, Text, Title } from '@mantine/core';

import { hotelHero01 } from '@/assets';
import styles from '@/components/common/TGHHotelHero/TGHHotelHero.module.css';

const TGHHotelHero = () => (
  <Box>
    <BackgroundImage className={styles.hotel_hero_img} src={hotelHero01.src}>
      <Flex className={styles.hotel_hero}>
        <Title className={styles.hotel_hero_title}>PREMIUM DELUXE</Title>
        <Text className={styles.hotel_hero_description}>
          한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스
        </Text>
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
export default TGHHotelHero;
