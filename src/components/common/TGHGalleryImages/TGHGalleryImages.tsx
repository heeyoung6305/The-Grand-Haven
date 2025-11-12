import { Box, Flex, Image, Text } from '@mantine/core';

import { gallery01, gallery03, gallery04, gallery05 } from '@/assets';
import { TGHGallery } from '@/components/common/TGHGallery';
import styles from '@/components/common/TGHGalleryImages/TGHGalleryImages.module.css';

const TGHGalleryImages = () => (
  <Box bg={'#ede9e4'} px={30}>
    <Flex className={styles.gallery_box}>
      <Box className={styles.gallery_image_box01}>
        <Image radius="none" w="auto" fit="none" src={gallery01.src} />
        <Image radius="none" w="auto" fit="none" src={gallery04.src} />
      </Box>
      <TGHGallery />
      <Box className={styles.gallery_image_box02}>
        <Image radius="none" w="auto" fit="none" src={gallery03.src} />
        <Image radius="none" w="auto" fit="none" src={gallery05.src} />
      </Box>
    </Flex>
    <Text className={styles.gallery_text_highlight}>
      Grand Haven <span className={styles.gallery_text}>Grand__Haven©</span> Grand
      <br />
      Haven Grand__Haven© Grand Haven
    </Text>
  </Box>
);

export default TGHGalleryImages;
