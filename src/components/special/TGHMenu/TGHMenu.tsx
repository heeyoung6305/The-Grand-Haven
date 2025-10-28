import { SERVICE_MENU_DATA } from '@/assets/data';
import styles from '@/features/main/MainPage.module.css';

/**
 * TGH 서비스 메뉴 컴포넌트
 * @constructor
 */
const TGHMenu = () => (
  <>
    <nav>
      <ul className={styles.menu_left}>
        {SERVICE_MENU_DATA.map((menu) => (
          <li key={menu.code} onClick={() => console.log(menu.name)}>
            {menu.name}
          </li>
        ))}
      </ul>
    </nav>
  </>
);

export default TGHMenu;
