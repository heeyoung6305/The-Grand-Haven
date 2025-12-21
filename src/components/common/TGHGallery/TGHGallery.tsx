import { Box, Flex, Image, Text, Title } from '@mantine/core';

import { gallery02, galleryLabel } from '@/assets';
import styles from '@/components/common/TGHGallery/TGHGallery.module.css';

const TGHGallery = () => (
  <Box bg={'#ede9e4'} px={30}>
    <Flex className={styles.gallery}>
      <Image className={styles.gallery_background_img} radius="none" w="auto" src={galleryLabel.src} alt={''} />
      <Title className={styles.gallery_title}>Our Gallery</Title>
      <Text className={styles.gallery_description} size="md">
        호텔 갤러리에서는 감각적인 현대 미술 작품과 세련된 인테리어가 어우러진 공간에서
        <br />
        눈과 마음이 모두 즐거워지는 특별한 경험을 선사합니다.
      </Text>
      <Image radius="none" w="auto" src={gallery02.src} alt={''} />
    </Flex>
  </Box>
);

export default TGHGallery;
