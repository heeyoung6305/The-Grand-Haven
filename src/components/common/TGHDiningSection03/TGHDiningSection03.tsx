import { Box, Flex, Image, Text, Title } from '@mantine/core';

import { dining03 } from '@/assets';
import styles from '@/components/common/TGHDiningSection03/TGHDiningSection03.module.css';

const TGHDiningSection03 = () => (
  <Box bg={'#fffcf6'} h={1400}>
    <Flex className={styles.dining_section03}>
      <Title className={styles.dining_section03_title}>Signature Bar</Title>
      <Text className={styles.dining_section03_description}>
        은은한 조명과 클래식한 무드가 어우러진 바 공간.
        <br />
        라운지와는 다른 깊이감이 느껴지는 우아한 분위기 속에서 한층 여유로운 시간을 만날 수 있습니다.
      </Text>
      <Image radius="none" w="auto" fit="none" src={dining03.src} />
    </Flex>
  </Box>
);
export default TGHDiningSection03;
