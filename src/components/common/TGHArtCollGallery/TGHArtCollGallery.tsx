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
    <Grid>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection02.src} />
        <Text className={styles.artcoll_gallery_text}>
          Prisms and Mirrors, high reliefs,
          <br />
          situated works 2016/2017 for São Paulo
        </Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection03.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>Between Red - 016NOV</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection04.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>Eastern Celebrity & Western Celebrity 15</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection05.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>Golden Legend</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection06.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>The Surfer</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection07.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>USQUAM NUSQUAM</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection08.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>Paradise Lost I - IV Between Urras and Anarres</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection09.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>Continental Splash</Text>
      </Grid.Col>
      <Grid.Col span={4} className={styles.artcoll_gallery_image}>
        <Image w="auto" fit="cover" src={artCollection10.src} alt={''} />
        <Text className={styles.artcoll_gallery_text}>Coexistence</Text>
      </Grid.Col>
    </Grid>
  </Box>
);
export default TGHArtCollGallery;
