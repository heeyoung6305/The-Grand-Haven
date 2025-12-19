import { Button, Divider, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';

import { grandDeluxeSuite01 } from '@/assets';

import styles from './TGHRoomsGrand.module.css';

const TGHRoomsGrand = () => (
  <Flex bg={'#fffcf6'} p={185} justify={'center'}>
    <Flex direction={'column'}>
      <Title className={styles.rooms_grand_title_a}>그랜드 디럭스 스위트</Title>
      <Text className={styles.rooms_grand_description_a}>
        클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트 객실
      </Text>
      <Flex className={styles.rooms_grand_bg}>
        <Image radius="none" w="auto" fit="cover" src={grandDeluxeSuite01.src} />
        {/*<Image radius="none" w="auto" fit="cover" src={grandDeluxeSuite02.src} />*/}
        {/*<Image radius="none" w="auto" fit="cover" src={grandDeluxeSuite03.src} />*/}
        <Stack className={styles.rooms_grand_details}>
          <Title className={styles.rooms_grand_title_b}>그랜드 디럭스 스위트</Title>
          <Text className={styles.rooms_grand_description_b}>
            큰 창으로 들어오는 빛과 여유롭게 펼쳐진 공간이
            <br />
            어우러져 하루의 흐름이 편안해지는 프리미엄 디럭스
          </Text>
          <Divider my="md" color="#9d835a" opacity={0.25} />
          <Stack pb={165}>
            <Group className={styles.rooms_grand_text}>
              <Text>면적</Text>
              <Text opacity={0.65}>45㎡</Text>
            </Group>
            <Group className={styles.rooms_grand_text}>
              <Text>인원</Text>
              <Text opacity={0.65}>성인 2인 기준</Text>
            </Group>
            <Group className={styles.rooms_grand_text}>
              <Text>베드타입</Text>
              <Text opacity={0.65}>KING / TWIN</Text>
            </Group>
          </Stack>
          <Button className={styles.rooms_grand_reserve_btn}>예약하기</Button>
        </Stack>
      </Flex>
    </Flex>
  </Flex>
);
export default TGHRoomsGrand;
