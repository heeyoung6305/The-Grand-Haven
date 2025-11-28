import { Box, Flex, Image, Text, Title } from '@mantine/core';

import { dining01 } from '@/assets';
import styles from '@/components/common/TGHDiningSection01/TGHDiningSection01.module.css';

const TGHDiningSection01 = () => (
  <Box bg={'#fffcf6'} h={1400}>
    <Flex className={styles.dining_section01}>
      <Title className={styles.dining_section01_title}>Grill & Seafood Buffet</Title>
      <Text className={styles.dining_section01_description}>
        높은 층고와 해변 전망이 어우러진 공간에서 즐기는 그릴 & 시푸드 셀렉션.
        <br />
        신선한 해산물과 셰프의 정성이 더해져 특별함이 담긴 미식 경험을 제공합니다.
      </Text>
      <Image radius="none" w="auto" fit="none" src={dining01.src} />
    </Flex>
  </Box>
);
export default TGHDiningSection01;
