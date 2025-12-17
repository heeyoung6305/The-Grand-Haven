import { Box, Flex, Text, Title } from '@mantine/core';

import styles from './TGHRoomsSelect.module.css';

const TGHRoomsSelect = () => (
  <Box bg={'#fffcf6'} px={30}>
    <Flex className={styles.rooms_select}>
      <Title className={styles.rooms_select_title}>ROOMS</Title>
      <Text className={styles.rooms_select_description}>
        예술적 품격을 갖춘 모던한 디럭스 객실부터 우아한 감성의 스위트 객실과 최고급 럭셔리 풀빌라까지,
        <br />
        다양한 객실에서 격이 다른 휴식과 여유를 경험해 보세요.
      </Text>
    </Flex>
  </Box>
);
export default TGHRoomsSelect;
