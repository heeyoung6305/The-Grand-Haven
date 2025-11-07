import { Box, Flex, Image } from '@mantine/core';

import { ofLabel, ourFacilitiesLeft, ourFacilitiesRight } from '@/assets/image';
import { TGHOF } from '@/components/common/TGHOF';

import styles from './TGHOFImage.module.css';

const TGHOFImage = () => (
  <Box bg={'#fffcf6'} px={30} className={styles.of_box}>
    <Image className={styles.of_background_img} radius="none" w="auto" fit="contain" src={ofLabel.src} />
    <Flex className={styles.of_images}>
      <Image
        className={styles.of_image_left}
        radius="none"
        w="auto"
        fit="contain"
        src={ourFacilitiesLeft.src}
        alt={'시설 왼쪽 이미지'}
      />
      <TGHOF />
      <Image radius="none" w="auto" fit="contain" src={ourFacilitiesRight.src} alt={'시설 오른쪽 이미지'} />
    </Flex>
  </Box>
);
export default TGHOFImage;
