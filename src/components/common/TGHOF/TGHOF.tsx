import { Box, Flex, Text, Title } from '@mantine/core';

import styles from '@/components/common/TGHOF/TGHOF.module.css';

const TGHOF = () => (
  <Box bg={'#fffcf6'} px={30}>
    <Flex className={styles.of}>
      <Title className={styles.of_title} order={3} textWrap="wrap">
        Our
        <br />
        Faci
        <br />
        <span className={styles.lities}>Lities</span>
      </Title>
      <Text className={styles.of_description} size="md">
        다채로운 액티비티와 여유로운 휴식이 공존하는
        <br />
        그랜드 헤이븐의 특별한 시설을 즐겨보세요.
      </Text>
    </Flex>
  </Box>
);

export default TGHOF;
