import { Box, Button, Divider, Flex, Group, Stack, Text, Title } from '@mantine/core';

import styles from './TGHRoomsDeluxe.module.css';

const TGHRoomsDeluxe = () => (
  <Flex bg={'#fffcf6'} p={185} justify={'center'}>
    <Flex direction={'column'}>
      <Title className={styles.rooms_deluxe_title_a}>프리미엄 디럭스</Title>
      <Text className={styles.rooms_deluxe_description_a}>
        한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스 객실
      </Text>
      <Box className={styles.rooms_deluxe_bg}>
        <Stack>
          <Title className={styles.rooms_deluxe_title_b}>프리미엄 디럭스</Title>
          <Text className={styles.rooms_deluxe_description_b}>
            큰 창으로 들어오는 빛과 여유롭게 펼쳐진 공간이
            <br />
            어우러져 하루의 흐름이 편안해지는 프리미엄 디럭스
          </Text>
          <Divider my="md" color="#9d835a" opacity={0.25} />
          <Stack pb={165}>
            <Group className={styles.rooms_deluxe_text}>
              <Text>면적</Text>
              <Text opacity={0.65}>45㎡</Text>
            </Group>
            <Group className={styles.rooms_deluxe_text}>
              <Text>인원</Text>
              <Text opacity={0.65}>성인 2인 기준</Text>
            </Group>
            <Group className={styles.rooms_deluxe_text}>
              <Text>베드타입</Text>
              <Text opacity={0.65}>KING / TWIN</Text>
            </Group>
          </Stack>
          <Button className={styles.rooms_deluxe_reserve_btn}>예약하기</Button>
        </Stack>
      </Box>
    </Flex>
  </Flex>
);
export default TGHRoomsDeluxe;
