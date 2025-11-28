import { Box, Flex, Image, Text } from '@mantine/core';

import { artCollection01 } from '@/assets';
import styles from '@/components/common/TGHArtCollSection01/TGHArtCollSection01.module.css';

const TGHArtCollSection01 = () => (
  <Box className={styles.artcoll_main}>
    <Flex className={styles.artcoll_main_image}>
      <Image radius="none" w="auto" fit="none" src={artCollection01.src} />
      <Text className={styles.artcoll_main_text}>Variation, Tranquility</Text>
    </Flex>
  </Box>
);
export default TGHArtCollSection01;
