import { Button, Flex, Stack, Title } from '@mantine/core';

import { LANGUAGE_DATA } from '@/assets/data';
import { TGHComboBox } from '@/components';

import styles from './TGHHeader.module.css';

/**
 * TGH Header 컴포넌트
 * @constructor
 */
const TGHHeader = () => (
  <Stack w={'100%'} gap={100} pt={40} px={30}>
    <Flex className={styles.tgh_header_flex}>
      <Button className={styles.tgh_header_menu_btn} onClick={() => console.log('로그인')}>
        로그인
      </Button>
      <Button className={styles.tgh_header_menu_btn} onClick={() => console.log('회원가입')}>
        회원가입
      </Button>
      <TGHComboBox data={LANGUAGE_DATA} w={50} isTransparent />
      <Button className={styles.reserve_btn} onClick={() => console.log('예약하기')}>
        예약하기
      </Button>
    </Flex>
    <Title className={styles.header_title}>The Grand Haven</Title>
  </Stack>
);

export default TGHHeader;
