import { Box, Flex, List, Title } from '@mantine/core';

import styles from './TGHHotelFeatures.module.css';

const TGHHotelFeatures = () => (
  <>
    <Box bg={'#fffcf6'}>
      <Title className={styles.hotel_features_info_title}>상세정보</Title>
    </Box>
    <Flex bg={'#fffcf6'} className={styles.hotel_features}>
      <Flex direction="column">
        <Title className={styles.hotel_features_info_thead}>객실 서비스</Title>
        <br />
        <List listStyleType="disc" spacing="lg">
          <List.Item>무료 WIFI</List.Item>
          <List.Item>55인치 FULL HD TV</List.Item>
          <List.Item>개인용 금고</List.Item>
          <List.Item>블루투스 스피커</List.Item>
        </List>
      </Flex>
      <List listStyleType="disc" spacing="lg">
        <br />
        <br />
        <List.Item>
          미니바
          <br />
          <br />
          (투숙 1박당 1회 무료)
        </List.Item>
        <List.Item>생수</List.Item>
        <List.Item>와인잔 및 와인 오프너</List.Item>
        <List.Item>커피포트</List.Item>
        <List.Item>물컵, 찻잔</List.Item>
        <List.Item>커피 및 차(티백)</List.Item>
      </List>
      <Flex direction="column">
        <Title className={styles.hotel_features_info_thead}>어메니티</Title>
        <br />
        <List listStyleType="disc" spacing="lg">
          <List.Item>
            배스 용품 5종
            <br />
            <br />
            (샴푸, 컨디셔너, 바디워시, 로션, 핸드워시)
          </List.Item>
          <List.Item>배스 타월</List.Item>
          <List.Item>배스 로브</List.Item>
          <List.Item>헤어드라이어</List.Item>
          <List.Item>체중계</List.Item>
        </List>
      </Flex>
      <Flex direction="column">
        <List spacing="lg">
          <Title className={styles.hotel_features_info_thead}>체크인 아웃</Title>
          <br />
          <List.Item>Check in 03:00 PM</List.Item>
          <List.Item>Check out 11:00 AM</List.Item>
        </List>
      </Flex>
    </Flex>
  </>
);
export default TGHHotelFeatures;
