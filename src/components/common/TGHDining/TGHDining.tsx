import { Box, Flex, Text, Title } from '@mantine/core';

import styles from './TGHDining.module.css';

const TGHDining = () => (
  <Box bg={'#fffcf6'} px={30}>
    <Flex className={styles.dining}>
      <Title className={styles.dining_title}>DINING</Title>
      <Text className={styles.dining_description}>
        최상의 재료와 세심한 서비스로 완성한 그랜드 헤븐만의 특별한 미식 여정에 초대합니다.
      </Text>
    </Flex>
  </Box>
);

export default TGHDining;
