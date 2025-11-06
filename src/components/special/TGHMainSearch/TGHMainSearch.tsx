import { BackgroundImage, Box, Divider, Flex, Stack, Text } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';

import { mainImg } from '@/assets/image';
import { TGHButton, TGHDrawer, TGHSearchInfoForm } from '@/components';

import styles from './TGHMainSearch.module.css';

const TGHMainSearch = () => {
  // const [checkInCalendarOpen, checkInCalendarOpenHook] = useDisclosure(false);
  const [roomAndPersonDrawerOpen, roomAndPersonDrawerOpenHook] = useDisclosure(false);
  return (
    <Box bg={'#ede9e4'} px={30}>
      <BackgroundImage className={styles.tgh_main_search_background_img} src={mainImg.src}>
        <Flex className={styles.tgh_main_search_background_img_flex}>
          <TGHSearchInfoForm title={'체크인 / 체크아웃'} info={'2025. 11. 01 - 2025. 11. 02'} />
          <Divider className={styles.tgh_main_search_divider} orientation="vertical" size={3} />
          <TGHSearchInfoForm
            title={'객실 및 인원'}
            info={'객실 1개, 투수객 1인'}
            onClick={roomAndPersonDrawerOpenHook.open}
          />
        </Flex>
        <TGHButton className={styles.tgh_main_search_btn} label={'상품 검색'} />
      </BackgroundImage>
      <Calendar></Calendar>
      {/* 객실 및 인원 drawer */}
      <TGHDrawer opened={roomAndPersonDrawerOpen} onClose={roomAndPersonDrawerOpenHook.close}>
        <Stack>
          <Text>객실</Text>
        </Stack>
      </TGHDrawer>
    </Box>
  );
};

export default TGHMainSearch;
