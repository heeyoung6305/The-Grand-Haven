import { Flex, Stack, Text } from '@mantine/core';

import { TGHButton } from '@/components';

import styles from './TGHMainSearch.module.css';

const TGHMainSearch = () => {
  console.log('TGHMainSearch');
  return (
    <Flex>
      <Stack>
        <Text>체크인 / 체크아웃</Text>
        <Text>2025. 11. 01 - 2025. 11. 02</Text>
      </Stack>
      <Stack>
        <Text>객실 및 인원</Text>
        <Text>객실 1개, 투수객 1인</Text>
      </Stack>
      <TGHButton className={styles.tgh_main_search_btn} label={'상품 검색'} />
    </Flex>
  );
};

export default TGHMainSearch;
