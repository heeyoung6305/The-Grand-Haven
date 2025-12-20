import { Button, Divider, Flex, Group, Image, Stack, Text, Title, UnstyledButton } from '@mantine/core';

import { arrowButtonLeft, arrowButtonRight, royalSuite01 } from '@/assets';

import styles from './TGHRoomsRoyal.module.css';

const TGHRoomsRoyal = () => (
  <Flex className={styles.rooms_royal}>
    <Flex direction={'column'}>
      <Title className={styles.rooms_royal_title_a}>로열 스위트</Title>
      <Text className={styles.rooms_royal_description_a}>
        감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트 객실
      </Text>
      <Flex className={styles.rooms_royal_bg}>
        <Image radius="none" w="auto" fit="cover" src={royalSuite01.src} />
        {/*<Image radius="none" w="auto" fit="cover" src={royalSuite02.src} />*/}
        {/*<Image radius="none" w="auto" fit="cover" src={royalSuite03.src} />*/}
        <Stack className={styles.rooms_royal_details}>
          <Title className={styles.rooms_royal_title_b}>로열 스위트</Title>
          <Text className={styles.rooms_royal_description_b}>
            차분한 분위기 속에 섬세한 디테일이 더해져
            <br />
            머무는 순간마다 깊은 인상이 남는 로열 스위트
          </Text>
          <Divider w={410} my="md" color="#9d835a" opacity={0.25} />
          <Stack pb={165}>
            <Group className={styles.rooms_royal_text}>
              <Text>면적</Text>
              <Text opacity={0.65}>99㎡</Text>
            </Group>
            <Group className={styles.rooms_royal_text}>
              <Text>인원</Text>
              <Text opacity={0.65}>성인 4인 기준</Text>
            </Group>
            <Group className={styles.rooms_royal_text}>
              <Text>베드타입</Text>
              <Text opacity={0.65}>KING / TWIN</Text>
            </Group>
          </Stack>
          <Button className={styles.reserve_btn}>예약하기</Button>
        </Stack>
      </Flex>
      <UnstyledButton className={styles.arrow_btn}>
        <Image className={styles.arrow_btn_left} w="auto" fit="cover" src={arrowButtonLeft.src} alt="이전 화살표" />
        <Image className={styles.arrow_btn_right} w="auto" fit="cover" src={arrowButtonRight.src} alt="다음 화살표" />
      </UnstyledButton>
    </Flex>
  </Flex>
);
export default TGHRoomsRoyal;
