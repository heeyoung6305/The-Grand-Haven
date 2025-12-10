import { Box, Divider, Flex, List, Paper, Text, Title } from '@mantine/core';

import styles from './TGHHotelNotice.module.css';

const TGHHotelNotice = () => (
  <Flex bg={'#fffcf6'} pb={185} justify={'center'}>
    <Paper className={styles.hotel_notice} withBorder>
      <Box className={styles.hotel_notice_bg}>
        <Title className={styles.hotel_notice_title}>안내 사항</Title>
      </Box>
      <Flex className={styles.hotel_notice_text}>
        <List listStyleType="disc" spacing="lg">
          <List.Item>성수기 시즌 체크 인/아웃 시간은 조정될 수 있습니다.</List.Item>
          <List.Item>
            정부의 「자원재활용법」 시행에 따라 일회용품 사용 억제에 동참하기 위해 2024년 3월 1일부터 칫솔, 치약,
            면도기와 같은 일회용품을 제공하지 않습니다. 투숙 시 개인용품을 지참해 주시기 바랍니다.
          </List.Item>
          <List.Item>전 객실 금연</List.Item>
        </List>
        <br />
        <br />
        <List spacing="lg">
          <List.Item>체크인 7일 전: 위약금 없음</List.Item>
          <List.Item>체크인 5–6일 전: 객실료의 30% 취소 위약금 부과</List.Item>
          <List.Item>체크인 3–4일 전: 객실료의 50% 취소 위약금 부과</List.Item>
          <List.Item>체크인 1–2일 전: 객실료의 100% 취소 위약금 부과</List.Item>
          <List.Item>당일 취소 및 No-Show: 객실료의 100% 취소 위약금 부과</List.Item>
        </List>
        <br />
        <br />
        <List spacing="lg">
          <List.Item>※ 예약 조건에 따라 취소 및 변경이 불가할 수 있습니다.</List.Item>
          <List.Item>※ 추가 부대시설 상품도 동일한 취소 / 변경 규정으로 위약금이 발생됩니다.</List.Item>
        </List>
        <br />
        <Divider my="xl" color="#e9e9e9" />
        <Flex gap="xl">
          <Title className={styles.hotel_notice_inquiry}>예약 문의</Title>
          <Text>유선 02-1256-3478</Text>
          <Divider orientation="vertical" color="#e9e9e9" />
          <Text>이메일 문의 g-haven@haven.com</Text>
        </Flex>
      </Flex>
    </Paper>
  </Flex>
);

export default TGHHotelNotice;
