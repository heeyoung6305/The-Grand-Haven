import { BackgroundImage, Divider, Flex } from '@mantine/core';

import { mainImg } from '@/assets/image';
import { TGHButton, TGHSearchInfoForm } from '@/components';

import styles from './TGHMainSearch.module.css';

const TGHMainSearch = () => {
  console.log('TGHMainSearch');
  return (
    <BackgroundImage className={styles.tgh_main_search_background_img} src={mainImg.src}>
      <Flex className={styles.tgh_main_search_background_img_flex}>
        <TGHSearchInfoForm title={'체크인 / 체크아웃'} info={'2025. 11. 01 - 2025. 11. 02'} />
        <Divider className={styles.tgh_main_search_divider} orientation="vertical" size={3} />
        <TGHSearchInfoForm title={'객실 및 인원'} info={'객실 1개, 투수객 1인'} />
      </Flex>
      <TGHButton className={styles.tgh_main_search_btn} label={'상품 검색'} />
    </BackgroundImage>
  );
};

export default TGHMainSearch;
