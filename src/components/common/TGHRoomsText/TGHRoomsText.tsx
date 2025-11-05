import { Image, Text, Typography, UnstyledButton } from '@mantine/core';

import { roomsArrowButton } from '@/assets';
import styles from '@/components/common/TGHRoomsText/TGHRoomsText.module.css';

const TGHRoomsText = () => (
  <>
    <Text lineClamp={5} component="div">
      <Typography>
        <h2 className={styles.rooms_left_title01}>프리미엄 디럭스</h2>
        <p className={styles.rooms_left_description01}>
          한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스
        </p>
        {/*<h2 className={styles.rooms_left_title02}>그랜드 디럭스 스위트</h2>*/}
        {/*<p className={styles.rooms_left_description02}>*/}
        {/*  클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트*/}
        {/*</p>*/}
        {/*<h2 className={styles.rooms_left_title03}>로열 스위트</h2>*/}
        {/*<p className={styles.rooms_left_description03}>*/}
        {/*  감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트*/}
        {/*</p>*/}
      </Typography>
      <UnstyledButton className={styles.rooms_arrow_btn}>
        <Image src={roomsArrowButton.src} />
      </UnstyledButton>
    </Text>
  </>
);

export default TGHRoomsText;
