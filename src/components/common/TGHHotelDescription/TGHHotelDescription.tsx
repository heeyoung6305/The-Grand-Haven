import { Flex, Image, Text, Typography } from '@mantine/core';

import { hotelDescription01, hotelDescription012 } from '@/assets';
import styles from '@/components/common/TGHHotelDescription/TGHHotelDescription.module.css';

const TGHHotelDescription = () => (
  <Flex className={styles.hotel_description}>
    <Flex>
      <Image radius="none" w="auto" fit="none" src={hotelDescription01.src} />
      <Image radius="none" w="auto" fit="none" src={hotelDescription012.src} />
    </Flex>
    <Text>
      <Typography>
        <h2 className={styles.hotel_description_title}>아늑함과 품격이 머무는 공간</h2>
        <p className={styles.hotel_description_description}>
          아늑한 분위기와 세심한 디테일이 조화를 이루는 객실로 머무는 순간마다 편안함과 안락함을 느낄 수 있습니다.
          <br />
          고급스러운 휴식과 품격 있는 경험을 통해 만족스러운 하루를 완성해 보세요.
        </p>
      </Typography>
    </Text>
  </Flex>
);
export default TGHHotelDescription;
