import { useState } from 'react';

import { Carousel } from '@mantine/carousel';
import { Button, Divider, Flex, Group, Image, Stack, Text, Title, UnstyledButton } from '@mantine/core';
import { EmblaCarouselType } from 'embla-carousel';

import { arrowButtonLeft, arrowButtonRight } from '@/assets';

import type { ITGHRoomSimpleInfoBoxProps } from '@/types';

import styles from './TGHRoomSimpleInfoBox.module.css';

const TGHRoomSimpleInfoBox = ({ data }: ITGHRoomSimpleInfoBoxProps) => {
  const [active, setActive] = useState(0);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  return (
    <Flex bg={'#fffcf6'} p={185} justify={'center'}>
      <Flex direction={'column'}>
        <Title className={styles.rooms_premium_title_a}>{data.title}</Title>
        <Text className={styles.rooms_premium_description_a}>{data.description}</Text>
        <Flex className={styles.rooms_premium_bg}>
          <Carousel
            withControls={false}
            getEmblaApi={setEmbla}
            onSlideChange={setActive}
            emblaOptions={{
              loop: true,
            }}
          >
            {data.imgData.map((img, index) => (
              <Carousel.Slide key={index}>
                <Image radius="none" fit="cover" src={img.src} alt={''} />
              </Carousel.Slide>
            ))}
          </Carousel>
          <Stack className={styles.rooms_premium_details}>
            <Title className={styles.rooms_premium_title_b}>{data.subTitle}</Title>
            <Text className={styles.rooms_premium_description_b}>{data.subDescription}</Text>
            <Divider w={410} my="md" color="#9d835a" opacity={0.25} />
            <Stack pb={165}>
              <Group className={styles.rooms_premium_text}>
                <Text>면적</Text>
                <Text opacity={0.65}>{data.area}</Text>
              </Group>
              <Group className={styles.rooms_premium_text}>
                <Text>인원</Text>
                <Text opacity={0.65}>{data.person}</Text>
              </Group>
              <Group className={styles.rooms_premium_text}>
                <Text>베드타입</Text>
                <Text opacity={0.65}>{data.bedType}</Text>
              </Group>
            </Stack>
            <Button className={styles.reserve_btn}>예약하기</Button>
          </Stack>
        </Flex>
        <Flex justify={'space-between'} h={115}>
          <Image
            className={styles.arrow_btn_left}
            w="auto"
            fit="cover"
            src={arrowButtonLeft.src}
            alt="이전 화살표"
            onClick={() => embla?.scrollPrev()}
          />
          <Group gap={10}>
            {data.imgData.map((_, index) => (
              <UnstyledButton
                key={index}
                onClick={() => embla?.scrollTo(index)}
                className={index === active ? styles.indicator_active : styles.indicator}
              />
            ))}
          </Group>
          <Image
            className={styles.arrow_btn_right}
            w="auto"
            fit="cover"
            src={arrowButtonRight.src}
            alt="다음 화살표"
            onClick={() => embla?.scrollNext()}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TGHRoomSimpleInfoBox;
