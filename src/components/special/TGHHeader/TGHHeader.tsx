import { Anchor, Box, Button } from '@mantine/core';

import { LANGUAGE_DATA } from '@/assets/data';
import TGHSelect from '@/components/common/TGHComboBox/TGHComboBox';
import styles from '@/features/main/MainPage.module.css';

/**
 * TGH 헤더 컴포넌트
 * @constructor
 */
const TGHHeader = () => (
  <>
    <Box className={styles.menu_right}>
      {/*<Box className={styles.menu_right}>*/}
      <Anchor>로그인</Anchor>
      <Anchor>회원가입</Anchor>
      <TGHSelect data={LANGUAGE_DATA} />
      <Button className={styles.book_btn}>예약하기</Button>
    </Box>
    <h1 className={styles.header_title}>The Grand Haven</h1>
  </>
);

export default TGHHeader;
