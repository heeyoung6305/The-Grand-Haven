'use client';
import { useState } from 'react';

import { BackgroundImage, Box, Button, Flex, Image, Typography, UnstyledButton } from '@mantine/core';
import { useRouter } from 'next/navigation';

import {
  roomsArrowButton,
  roomsGrandDeluxe01,
  roomsGrandDeluxe02,
  roomsPremiumDeluxe01,
  roomsPremiumDeluxe02,
  roomsRoyalSuite01,
  roomsRoyalSuite02,
} from '@/assets';
import { HotelReservationEnum } from '@/enums';
import { useMainStore } from '@/providers';

import styles from './TGHRoomsImage.module.css';

interface TGHRoomsDataType {
  id: HotelReservationEnum;
  title: string;
  description: string;
  leftImgSrc: string;
  rightImgSrc: string;
}

const TGHRoomsImage = () => {
  const router = useRouter();
  const { setReservationId } = useMainStore((state) => state);
  const [currentIndex, setCurrentIndex] = useState(0);

  const tghRoomsData: TGHRoomsDataType[] = [
    {
      id: HotelReservationEnum.PREMIUM_DELUXE,
      title: '프리미엄 디럭스',
      description: '한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스',
      leftImgSrc: roomsPremiumDeluxe01.src,
      rightImgSrc: roomsPremiumDeluxe02.src,
    },
    {
      id: HotelReservationEnum.GRAND_DELUXE,
      title: '그랜드 디럭스 스위트',
      description: '클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트',
      leftImgSrc: roomsGrandDeluxe01.src,
      rightImgSrc: roomsGrandDeluxe02.src,
    },
    {
      id: HotelReservationEnum.ROYAL_SUIT,
      title: '로열 스위트',
      description: '감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트',
      leftImgSrc: roomsRoyalSuite01.src,
      rightImgSrc: roomsRoyalSuite02.src,
    },
  ];

  const currentRoom = tghRoomsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === tghRoomsData.length - 1 ? 0 : prev + 1));
  };

  const handleClickReserveButton = (reserveId: HotelReservationEnum) => {
    setReservationId(reserveId);
    router.push('/reservation');
  };
  return (
    <Flex className={styles.rooms_reserve}>
      <Box>
        <Image radius="none" w="auto" fit="none" src={currentRoom.leftImgSrc} alt={currentRoom.title} />
        <Box w={510}>
          <Typography>
            <h2 className={styles.rooms_left_title}>{currentRoom.title}</h2>
            <p className={styles.rooms_left_description}>{currentRoom.description}</p>
          </Typography>
        </Box>
        <UnstyledButton className={styles.rooms_arrow_btn} onClick={handleNext}>
          <Image src={roomsArrowButton.src} alt="" />
        </UnstyledButton>
      </Box>
      <Box>
        <BackgroundImage className={styles.rooms_background_img} src={currentRoom.rightImgSrc}>
          <Button className={styles.rooms_reserve_btn} onClick={() => handleClickReserveButton(currentRoom.id)}>
            지금 예약
          </Button>
        </BackgroundImage>
      </Box>
    </Flex>
  );
};

export default TGHRoomsImage;
