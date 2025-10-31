import { Flex, List } from '@mantine/core';

import { SERVICE_MENU_DATA } from '@/assets/data';

import styles from './TGHServiceMenu.module.css';

/**
 * TGH 서비스 메뉴 컴포넌트
 * @constructor
 */
const TGHServiceMenu = () => (
  <Flex className={styles.service_menu_flex}>
    {SERVICE_MENU_DATA.map((menu) => (
      <List key={menu.code} className={styles.service_menu_list} onClick={() => console.log(menu.name)}>
        {menu.name}
      </List>
    ))}
  </Flex>
);

export default TGHServiceMenu;
