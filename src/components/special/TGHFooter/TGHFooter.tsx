import { Divider, Flex, Stack, Title } from '@mantine/core';

import styles from './TGHFooter.module.css';

const TGHFooter = () => (
  <Stack bg={'#ede9e4'} gap={25} px={30} py={50}>
    <Title className={styles.footer_title}>CUSTOMER CENTER</Title>
    <Flex className={styles.footer_text01}>
      <p>
        객실예약 <br /> <span className={styles.number}>02-1256-3478</span>
      </p>
      <Divider orientation="vertical" mx="lg" opacity={0.4} size="2px" />
      <p>
        Tel. <br /> <span className={styles.number}>02-1234-5678</span>
      </p>
      <Divider orientation="vertical" mx="lg" opacity={0.4} size="2px" />
      <p>
        Fax <br /> <span className={styles.number}>02-5678-1234</span>
      </p>
      <Divider orientation="vertical" mx="lg" opacity={0.4} size="2px" />
      <p>
        E-mail <br /> <span className={styles.number}>g-haven@haven.com</span>
      </p>
    </Flex>
    <Flex className={styles.footer_text02}>
      <p className={styles.policy}>개인정보 처리 방침</p>
      <p>위치정보 이용약관</p>
      <p>영상정보처리기기 운영ㆍ관리방침</p>
      <p>이용약관</p>
      <p>ABOUT US</p>
      <p>오시는 길</p>
    </Flex>
    <Flex className={styles.footer_text03}>
      <p>
        (주)그랜드 헤이븐
        <span className={styles.divider}>|</span>
        대표이사 : 전희영
        <span className={styles.divider}>|</span>
        강원특별자치도 강릉시 해오름로 128 <br />
        사업자등록번호 : 123-45-67890
        <span className={styles.divider}>|</span>
        통신판매업신고번호 : 제2015-강원강릉-0289호 <br />
        Copyright ⓒ 2015 - 2025 THE GRAND HAVEN Co. Ltd. All rights reserved.
      </p>
    </Flex>
  </Stack>
);

export default TGHFooter;
