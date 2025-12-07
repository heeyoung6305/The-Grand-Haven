import { Flex, List } from '@mantine/core';

import { SERVICE_MENU_DATA } from '@/assets/data';
import { ServiceMenuEnum } from '@/enums';
import { useMainStore } from '@/providers';

import type { ITGHMenuNav, ITGHServiceMenuProps } from '@/types';

import styles from './TGHServiceMenu.module.css';

/**
 * TGH 서비스 메뉴 컴포넌트
 * @constructor
 */
const TGHServiceMenu = ({ router }: ITGHServiceMenuProps) => {
  const { setServiceId } = useMainStore((state) => state);

  /**
   * 메뉴 별 클릭 시 routing 및 스크롤 처리
   * @param menu
   */
  const handleMenuClick = (menu: ITGHMenuNav) => {
    if (
      (menu.code === ServiceMenuEnum.HOTEL ||
        menu.code === ServiceMenuEnum.DINING ||
        menu.code === ServiceMenuEnum.ART_COLLECTION) &&
      menu.link
    ) {
      setServiceId(menu.link);
      router.push('/service');
    } else {
      console.log(menu);
    }
  };
  return (
    <Flex className={styles.service_menu_flex}>
      {SERVICE_MENU_DATA.map((menu) => (
        <List key={menu.code} className={styles.service_menu_list} onClick={() => handleMenuClick(menu)}>
          {menu.name}
        </List>
      ))}
    </Flex>
  );
};

export default TGHServiceMenu;
