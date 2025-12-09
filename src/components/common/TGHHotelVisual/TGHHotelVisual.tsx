import { Box, Flex, Image, Text } from '@mantine/core';

import { hotelVisual01 } from '@/assets';
import styles from '@/components/common/TGHHotelVisual/TGHHotelVisual.module.css';

const TGHHotelVisual = () => (
  <Box className={styles.hotel_visual} bg={'#fffcf6'}>
    <Flex className={styles.hotel_visual_main}>
      <Text>Premier Standard</Text>
      <Image radius="none" w="auto" fit="none" src={hotelVisual01.src} />
    </Flex>
  </Box>
);
export default TGHHotelVisual;
