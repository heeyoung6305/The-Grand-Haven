import { Box, Flex, Text } from '@mantine/core';

import styles from '@/components/common/TGHArtColl/TGHArtColl.module.css';

const TGHArtColl = () => (
  <Box px={30}>
    <Flex className={styles.artcoll}>
      <Text className={styles.artcoll_text}>
        그랜드 헤이븐에서 깊이 있는 예술의 품격을 경험해보세요.
        <br />
        공간 곳곳에 자리한 작품들이 일상의 순간을 특별하게 만듭니다.
      </Text>
    </Flex>
  </Box>
);
export default TGHArtColl;
