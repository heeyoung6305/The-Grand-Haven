import { Divider, Flex, Stack, Text, Title } from '@mantine/core';

import { TGHFooterInfoBox } from './components';

import styles from './TGHFooter.module.css';

const TGHFooter = () => (
  <Stack bg={'#ede9e4'} gap={25} px={30} py={50}>
    <Title className={styles.footer_title}>CUSTOMER CENTER</Title>
    <Flex align={'center'} gap={17}>
      <TGHFooterInfoBox title={'객실예약'} info={'02-1256-3478'} />
      <Divider className={styles.divider} color={'#191919'} orientation="vertical" opacity={0.75} size={1} h={50} />
      <TGHFooterInfoBox title={'Tel.'} info={'02-1256-3478'} />
      <Divider className={styles.divider} color={'#191919'} orientation="vertical" opacity={0.75} size={1} h={50} />
      <TGHFooterInfoBox title={'Fax'} info={'02-5678-1234'} />
      <Divider className={styles.divider} color={'#191919'} orientation="vertical" opacity={0.75} size={1} h={50} />
      <TGHFooterInfoBox title={'E-mail'} info={'g-haven@haven.com'} />
    </Flex>
    <Flex className={styles.footer_text02}>
      <Text className={styles.policy}>개인정보 처리 방침</Text>
      <Text>위치정보 이용약관</Text>
      <Text>영상정보처리기기 운영ㆍ관리방침</Text>
      <Text>이용약관</Text>
      <Text>ABOUT US</Text>
      <Text>오시는 길</Text>
    </Flex>
    <Stack gap={0}>
      <Flex className={styles.footer_text03}>
        <Text>(주)그랜드 헤이븐</Text>
        <Divider className={styles.divider} color={'#191919'} orientation="vertical" opacity={0.75} size={1} h={19} />
        <Text>대표이사 : 전희영</Text>
        <Divider className={styles.divider} color={'#191919'} orientation="vertical" opacity={0.75} size={1} h={19} />
        <Text>강원특별자치도 강릉시 해오름로 128</Text>
      </Flex>
      <Flex className={styles.footer_text03}>
        <Text>사업자등록번호 : 123-45-67890</Text>
        <Divider className={styles.divider} color={'#191919'} orientation="vertical" opacity={0.75} size={1} h={19} />
        <Text>
          통신판매업신고번호 : 제2015-강원강릉-0289호 <br />
        </Text>
      </Flex>
      <Flex className={styles.footer_text03}>
        <Text>Copyright ⓒ 2015 - 2025 THE GRAND HAVEN Co. Ltd. All rights reserved.</Text>
      </Flex>
    </Stack>
  </Stack>
);

export default TGHFooter;
