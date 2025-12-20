import { Button, Divider, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';

import { premiumDeluxe01 } from '@/assets';

import styles from './TGHRoomsPremium.module.css';

const TGHRoomsPremium = () => (
  <Flex bg={'#fffcf6'} p={185} justify={'center'}>
    <Flex direction={'column'}>
      <Title className={styles.rooms_premium_title_a}>프리미엄 디럭스</Title>
      <Text className={styles.rooms_premium_description_a}>
        한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스 객실
      </Text>
      <Flex className={styles.rooms_premium_bg}>
        <Image radius="none" w="auto" fit="cover" src={premiumDeluxe01.src} />
        {/*<Image radius="none" w="auto" fit="cover" src={premiumDeluxe02.src} />*/}
        {/*<Image radius="none" w="auto" fit="cover" src={premiumDeluxe03.src} />*/}
        <Stack className={styles.rooms_premium_details}>
          <Title className={styles.rooms_premium_title_b}>프리미엄 디럭스</Title>
          <Text className={styles.rooms_premium_description_b}>
            큰 창으로 들어오는 빛과 여유롭게 펼쳐진 공간이
            <br />
            어우러져 하루의 흐름이 편안해지는 프리미엄 디럭스
          </Text>
          <Divider w={410} my="md" color="#9d835a" opacity={0.25} />
          <Stack pb={165}>
            <Group className={styles.rooms_premium_text}>
              <Text>면적</Text>
              <Text opacity={0.65}>45㎡</Text>
            </Group>
            <Group className={styles.rooms_premium_text}>
              <Text>인원</Text>
              <Text opacity={0.65}>성인 2인 기준</Text>
            </Group>
            <Group className={styles.rooms_premium_text}>
              <Text>베드타입</Text>
              <Text opacity={0.65}>KING</Text>
            </Group>
          </Stack>
          <Button className={styles.rooms_premium_reserve_btn}>예약하기</Button>
        </Stack>
      </Flex>
    </Flex>
  </Flex>
);
export default TGHRoomsPremium;
