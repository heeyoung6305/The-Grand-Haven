import { Box, Flex, Image, Text } from '@mantine/core';

import { artCollection01 } from '@/assets';
import { TGHArtCollGallery } from '@/components/common/TGHArtCollGallery';
import styles from '@/components/common/TGHArtCollHero/TGHArtCollHero.module.css';

const TGHArtCollHero = () => (
  <Box className={styles.artcoll_hero}>
    <Flex className={styles.artcoll_hero_image}>
      <Image radius="none" w="auto" fit="none" src={artCollection01.src} />
      <Text className={styles.artcoll_hero_text}>Variation, Tranquility</Text>
    </Flex>
    <TGHArtCollGallery />
  </Box>
);
export default TGHArtCollHero;
