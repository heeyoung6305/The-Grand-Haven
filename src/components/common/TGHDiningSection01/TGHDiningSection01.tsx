import { Box, Flex, Text, Title } from '@mantine/core';

import styles from '@/components/common/TGHDining/TGHDining.module.css';

const TGHDiningSection01 = () => (
  <Box bg={'#fffcf6'} px={30}>
    <Flex className={styles.dining_section01}>
      <Title className={styles.dining_section01_title}>Grill & Seafood Buffet</Title>
      <Text className={styles.dining_section01_description}>
        높은 층고와 해변 전망이 어우러진 공간에서 즐기는 그릴 & 시푸드 셀렉션.
        <br />
        신선한 해산물과 셰프의 정성이 더해져 특별함이 담긴 미식 경험을 제공합니다.
      </Text>
    </Flex>
  </Box>
);
export default TGHDiningSection01;
