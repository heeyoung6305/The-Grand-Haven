import { Button, Flex, List } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { SERVICE_MENU_DATA } from '@/assets/data';
import { ServiceMenuEnum } from '@/enums';
import { useMainStore } from '@/providers';

import type { ITGHMenuNav } from '@/types';

import styles from './TGHSubMenu.module.css';

const TGHSubMenu = () => {
  const { setServiceId } = useMainStore((state) => state);
  const router = useRouter();
  const handleLogoClick = () => {
    router.push('/');
  };

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
    <Flex className={styles.sub_header} px={30}>
      <Button variant={'transparent'} className={styles.sub_header_title} onClick={handleLogoClick}>
        The Grand Haven
      </Button>
      {SERVICE_MENU_DATA.map((menu) => (
        <List key={menu.code} className={styles.sub_header_menu_list} onClick={() => handleMenuClick(menu)}>
          {menu.name}
        </List>
      ))}
    </Flex>
  );
};

export default TGHSubMenu;
