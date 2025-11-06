import { Flex, Stack, Title } from '@mantine/core';

import { LANGUAGE_DATA } from '@/assets/data';
import { TGHButton, TGHComboBox } from '@/components';

import styles from './TGHHeader.module.css';

/**
 * TGH Header 컴포넌트
 * @constructor
 */
const TGHHeader = () => (
  <Stack w={'100%'} gap={100} pt={40} px={30} bg={'#ede9e4'}>
    <Flex className={styles.tgh_header_flex}>
      <TGHButton className={styles.tgh_header_menu_btn} onClick={() => console.log('로그인')} label={'로그인'} />
      <TGHButton className={styles.tgh_header_menu_btn} onClick={() => console.log('회원가입')} label={'회원가입'} />
      <TGHComboBox data={LANGUAGE_DATA} w={50} isTransparent />
      <TGHButton className={styles.reserve_btn} onClick={() => console.log('예약하기')} label={'예약하기'} />
    </Flex>
    <Title className={styles.header_title}>The Grand Haven</Title>
  </Stack>
);

export default TGHHeader;
