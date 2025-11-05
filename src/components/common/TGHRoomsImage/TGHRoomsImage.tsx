import { BackgroundImage, Box, Button, Flex, Image } from '@mantine/core';

import { roomsPremiumDeluxe01, roomsPremiumDeluxe02 } from '@/assets';
import TGHRoomsText from '@/components/common/TGHRoomsText';

import styles from './TGHRoomsImage.module.css';

const TGHRoomsImage = () => (
  <>
    <Flex className={styles.rooms_reserve}>
      <Box>
        <Image radius="none" w="auto" fit="contain" src={roomsPremiumDeluxe01.src} />
        <TGHRoomsText />
      </Box>
      <Box>
        <BackgroundImage className={styles.rooms_background_img} src={roomsPremiumDeluxe02.src}>
          {/*<Image radius="none" w="auto" fit="contain" src={roomsPremiumDeluxe02.src} />*/}
          <Button className={styles.rooms_reserve_btn}>지금 예약</Button>
        </BackgroundImage>
      </Box>
    </Flex>
  </>
);

export default TGHRoomsImage;
