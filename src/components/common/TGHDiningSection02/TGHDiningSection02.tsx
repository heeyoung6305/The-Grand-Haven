import { Image, Stack, Text, Title } from '@mantine/core';

import { dining02 } from '@/assets';

import styles from './TGHDiningSection02.module.css';

const TGHDiningSection02 = () => (
  <Stack data-breakout className={styles.dining_section02}>
    <Stack className={styles.dining_section02_stack}>
      <Title className={styles.dining_section02_title}>Ocean Lounge</Title>
      <Text className={styles.dining_section02_description}>
        따스한 자연광과 탁 트인 오션뷰가 조화를 이루는 라운지.
        <br />
        세련된 공간에서 편안한 분위기와 여유로운 무드를 느낄 수 있는 라운지의 메인 스폿입니다.
      </Text>
    </Stack>
    <Image radius="none" w="auto" fit="none" src={dining02.src} alt={''} />
  </Stack>
);
export default TGHDiningSection02;
