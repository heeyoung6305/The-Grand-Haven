import { Box, Grid, Image } from '@mantine/core';

import { gallery01, gallery02, gallery03, gallery04, gallery05 } from '@/assets';

const TGHGalleryImages = () => (
  <Box px={30}>
    <Grid px={30} gutter={40} justify="center" align="stretch">
      <Grid.Col span={{ base: 12, md: 3 }}>
        <Image radius="none" fit="none" src={gallery01.src} />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 6 }}>
        <Image radius="none" fit="none" src={gallery02.src} />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 3 }}>
        <Image radius="none" fit="none" src={gallery03.src} />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 4 }}>
        <Image radius="none" fit="none" src={gallery04.src} />
      </Grid.Col>

      <Grid.Col span={{ base: 12, md: 5 }}>
        <Image radius="none" fit="none" src={gallery05.src} />
      </Grid.Col>
    </Grid>
  </Box>
);

export default TGHGalleryImages;
