import { Box, Flex, Image } from '@mantine/core';

import { gallery01, gallery03, gallery04, gallery05 } from '@/assets';
import { TGHGallery } from '@/components/common/TGHGallery';
import styles from '@/components/common/TGHGalleryImages/TGHGalleryImages.module.css';

const TGHGalleryImages = () => (
  // <Box px={30}>
  //   <Grid gutter={200} justify="space-between" align="stretch">
  //     <Grid.Col span={{ base: 12, md: 3 }} mt={-60}>
  //       <Image radius="none" fit="none" src={gallery01.src} />
  //     </Grid.Col>
  //
  //     <Grid.Col span={{ base: 12, md: 6 }} mt={180}>
  //       <Image radius="none" fit="none" src={gallery02.src} />
  //     </Grid.Col>
  //
  //     <Grid.Col span={{ base: 12, md: 3 }} mt={-60}>
  //       <Image radius="none" fit="none" src={gallery03.src} />
  //     </Grid.Col>
  //
  //     <Grid.Col span={{ base: 12, md: 3 }} mt={-450}>
  //       <Image radius="none" fit="none" src={gallery04.src} />
  //     </Grid.Col>
  //
  //     <Grid.Col span={{ base: 12, md: 4 }}>
  //       <Image radius="none" fit="none" src={gallery05.src} />
  //     </Grid.Col>
  //   </Grid>
  // </Box>
  <Box bg={'#ede9e4'} px={30}>
    <Flex className={styles.gallery_box}>
      <Box className={styles.gallery_image_box01}>
        <Image radius="none" w="auto" fit="none" src={gallery01.src} />
        <Image radius="none" w="auto" fit="none" src={gallery03.src} />
        {/*<Image radius="none" w="auto" fit="none" src={gallery04.src} />*/}
      </Box>
      <TGHGallery />
      <Box className={styles.gallery_image_box02}>
        {/*<Image radius="none" w="auto" fit="none" src={gallery03.src} />*/}
        <Image radius="none" w="auto" fit="none" src={gallery04.src} />
        <Image radius="none" w="auto" fit="none" src={gallery05.src} />
      </Box>
    </Flex>
  </Box>
);

export default TGHGalleryImages;
