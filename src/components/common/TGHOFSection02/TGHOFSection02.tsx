import { Box, Image, Text, UnstyledButton } from '@mantine/core';

import { GrandLounge, ofArrowButton0203 } from '@/assets';
import styles from '@/components/common/TGHOFSection02/TGHOFSection02.module.css';

const TGHOFSection02 = () => (
  <Box bg={'#fffcf6'} px={30}>
    <Text className={styles.of_section02} component="div" py={40}>
      <Image radius="none" w="auto" fit="contain" src={GrandLounge.src} alt={'라운지 메인 이미지'} />
      <h2 className={styles.of_section_title02_1}>02</h2>
      <h2 className={styles.of_section_title02_2}>Grand Lounge</h2>
      <UnstyledButton className={styles.of_arrow_btn_02}>
        <Image w="auto" src={ofArrowButton0203.src} />
      </UnstyledButton>
    </Text>
  </Box>
);

export default TGHOFSection02;
