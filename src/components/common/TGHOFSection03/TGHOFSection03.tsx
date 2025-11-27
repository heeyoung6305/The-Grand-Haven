import { Box, Image, Text } from '@mantine/core';

import { WineBarReserve } from '@/assets';
import styles from '@/components/common/TGHOFSection03/TGHOFSection03.module.css';

const TGHOFSection03 = () => (
  <Box bg={'#fffcf6'} px={30} pb={300}>
    <Text className={styles.of_section03} component="div" py={40}>
      <Image radius="none" w="auto" fit="contain" src={WineBarReserve.src} alt={'와인바 메인 이미지'} />
      <h2 className={styles.of_section_title03_1}>03</h2>
      <h2 className={styles.of_section_title03_2}>Wine Bar“Reserve”</h2>
    </Text>
  </Box>
);

export default TGHOFSection03;
