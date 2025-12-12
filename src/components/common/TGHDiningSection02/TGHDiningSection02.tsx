import { Box, Flex, Image, Text, Title } from '@mantine/core';

import { dining02 } from '@/assets';

import styles from './TGHDiningSection02.module.css';

const TGHDiningSection02 = () => (
  <Box bg={'#fffcf6'} h={1400}>
    <Flex className={styles.dining_section02}>
      <Title className={styles.dining_section02_title}>Ocean Lounge</Title>
      <Text className={styles.dining_section02_description}>
        따스한 자연광과 탁 트인 오션뷰가 조화를 이루는 라운지.
        <br />
        세련된 공간에서 편안한 분위기와 여유로운 무드를 느낄 수 있는 라운지의 메인 스폿입니다.
      </Text>
      <Flex className={styles.dining_section02_img}>
        <Image radius="none" w="auto" fit="none" src={dining02.src} alt={'다이닝 두번째 섹션 메인 이미지'} />
      </Flex>
    </Flex>
  </Box>
);
export default TGHDiningSection02;
