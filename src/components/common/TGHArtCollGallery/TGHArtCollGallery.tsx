import { Box, Grid, Image, Text } from '@mantine/core';

import {
  artCollection02,
  artCollection03,
  artCollection04,
  artCollection05,
  artCollection06,
  artCollection07,
  artCollection08,
  artCollection09,
  artCollection10,
} from '@/assets';
import styles from '@/components/common/TGHArtCollGallery/TGHArtCollGallery.module.css';

const TGHArtCollGallery = () => (
  <Box className={styles.artcoll_gallery}>
    <Grid className={styles.artcoll_gallery_grid}>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection02.src} />
        <Text className={styles.artcoll_gallery_text}>
          Prisms and Mirrors, high reliefs,
          <br />
          situated works 2016/2017 for São Paulo
        </Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection03.src} />
        <Text className={styles.artcoll_gallery_text}>Between Red - 016NOV</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection04.src} />
        <Text className={styles.artcoll_gallery_text}>Eastern Celebrity & Western Celebrity 15</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection05.src} />
        <Text className={styles.artcoll_gallery_text}>Golden Legend</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection06.src} />
        <Text className={styles.artcoll_gallery_text}>The Surfer</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection07.src} />
        <Text className={styles.artcoll_gallery_text}>USQUAM NUSQUAM</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection08.src} />
        <Text className={styles.artcoll_gallery_text}>Paradise Lost I - IV Between Urras and Anarres</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection09.src} />
        <Text className={styles.artcoll_gallery_text}>Continental Splash</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image radius="none" w="auto" fit="none" src={artCollection10.src} />
        <Text className={styles.artcoll_gallery_text}>Coexistence</Text>
      </Grid.Col>
    </Grid>
  </Box>
);
export default TGHArtCollGallery;
