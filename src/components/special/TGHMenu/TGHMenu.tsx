import { SERVICE_MENU_DATA } from '@/assets/data';
import styles from './TGHMenu.module.css';
import { Flex, List } from '@mantine/core';

/**
 * TGH 서비스 메뉴 컴포넌트
 * @constructor
 */
const TGHMenu = () => (
  <Flex className={styles.menu_flex}>
    {SERVICE_MENU_DATA.map((menu) => (
      <List key={menu.code} className={styles.menu_list} onClick={() => console.log(menu.name)}>
        {menu.name}
      </List>
    ))}
  </Flex>
);

export default TGHMenu;
