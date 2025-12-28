import { Box, Flex, Image, Text } from '@mantine/core';

import { HOTEL_VISUAL_MAP } from '@/assets/data/reservationData';
import { HotelReservationEnum } from '@/enums';

import styles from './TGHHotelVisual.module.css';

interface ITGHHotelVisualProps {
  reservationId: HotelReservationEnum;
}
const TGHHotelVisual = ({ reservationId }: ITGHHotelVisualProps) => {
  const visual = HOTEL_VISUAL_MAP[reservationId];

  if (!visual) return null;
  return (
    <Box className={styles.hotel_visual} bg={'#fffcf6'}>
      <Flex className={styles.hotel_visual_main}>
        <Text>Premier Standard</Text>
        <Image radius="none" w="auto" fit="none" src={visual.imgData.src} alt={''} />
      </Flex>
    </Box>
  );
};
export default TGHHotelVisual;
