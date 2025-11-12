import { Box, Divider, Flex, Text, Title } from '@mantine/core';

import styles from '@/components/common/TGHLocation/TGHLocation.module.css';

const TGHLocation = () => (
  <>
    <Box bg={'#ede9e4'}>
      <Flex className={styles.location_flex}>
        <Title className={styles.location_title01}>Location</Title>
        <Title className={styles.location_title02}>그랜드 헤이븐</Title>
        <Divider my="xs" />
        <Box className={styles.location_text}>
          <Flex justify={'space-between'}>
            <Text>주소</Text>
            <Text>강원특별자치도 강릉시 해오름로 128</Text>
          </Flex>
          <Flex justify={'space-between'}>
            <Text>대표번호</Text>
            <Text>02-1234-5678</Text>
          </Flex>
          <Flex justify={'space-between'}>
            <Text>객실예약</Text>
            <Text>02-1256-3478</Text>
          </Flex>
        </Box>
        <Divider my="xs" />
      </Flex>
    </Box>
  </>
);

export default TGHLocation;
