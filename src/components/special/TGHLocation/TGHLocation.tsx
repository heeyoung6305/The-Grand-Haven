import { Box, Divider, Flex, Title } from '@mantine/core';

import styles from '@/components/special/TGHLocation/TGHLocation.module.css';

const locationData = [
  { label: '주소', value: '강원특별자치도 강릉시 해오름로 128' },
  { label: '대표번호', value: '02-1234-5678' },
  { label: '객실예약', value: '02-1256-3478' },
];
const TGHLocation = () => (
  <Box bg={'#ede9e4'} pt={180}>
    <Flex className={styles.location_flex}>
      <Title className={styles.location_title01}>Location</Title>
      <Title className={styles.location_title02}>그랜드 헤이븐</Title>
      <Divider my="xl" opacity={0.4} size="3px" />
      <Box className={styles.location_text}>
        {locationData.map((item) => (
          <Flex key={item.label} justify="space-between">
            <p>{item.label}</p>
            <p>{item.value}</p>
          </Flex>
        ))}
      </Box>
      <Divider my="xl" opacity={0.4} size="3px" />
    </Flex>
  </Box>
);

export default TGHLocation;
