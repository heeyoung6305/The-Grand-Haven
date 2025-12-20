import { Button, Divider, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';

import { grandDeluxeSuite01 } from '@/assets';

import styles from './TGHRoomsGrand.module.css';

const TGHRoomsGrand = () => (
  <Flex className={styles.rooms_grand}>
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
            은은한 조명과 깊이 있는 색감 속에서 공간의
            <br />
            결을 천천히 느끼게 되는 그랜드 디럭스 스위트
          </Text>
          <Divider w={410} my="md" color="#9d835a" opacity={0.25} />
          <Stack pb={165}>
            <Group className={styles.rooms_grand_text}>
              <Text>면적</Text>
              <Text opacity={0.65}>68㎡</Text>
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
