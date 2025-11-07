import { Box, Image, Text, Typography } from '@mantine/core';

import { TheArtOfDining } from '@/assets';
import styles from '@/components/common/TGHOFSection01/TGHOFSection01.module.css';

const TGHOFSection01 = () => (
  <Box bg={'#fffcf6'} px={30}>
    <Text className={styles.of_section01} component="div">
      <Typography>
        <h2 className={styles.of_section_title01}>
          01
          <br />
          <br />
          <br />
          The Art <br />
          Of Dining
        </h2>
        <p className={styles.of_section_description01}>
          고급스러운 인테리어와 세련된 분위기가 어우러진 호텔 다이닝에서 <br />
          최상급 식자재로 완성된 미쉐린 가이드 스타 레스토랑부터 프리미엄 뷔페까지 <br />
          셰프의 창의적인 요리와 다양한 와인, 그리고 라이브 음악이 선사하는 <br />
          잊지 못할 미식의 순간을 경험해보세요.
        </p>
      </Typography>
      <Image radius="none" w="auto" fit="contain" src={TheArtOfDining.src} alt={'다이닝 메인 이미지'} />
    </Text>
  </Box>
);

export default TGHOFSection01;
