import { HeaderMenuEnum } from '@/enums';
import styles from '@/features/main/MainPage.module.css';

import type { ITGHHeaderMenu } from '@/types';

/**
 * TGH 헤더 컴포넌트
 * @constructor
 */
const TGHHeader = () => {
  const headerMenuData: ITGHHeaderMenu[] = [
    { code: HeaderMenuEnum.LOGIN, name: '로그인' },
    { code: HeaderMenuEnum.SIGN_UP, name: '회원가입' },
    { code: HeaderMenuEnum.LANGUAGE, name: 'KR ▼' },
    { code: HeaderMenuEnum.RESERVATION, name: '예약하기', className: styles.book_btn },
  ];
  return (
    <>
      <nav>
        <ul className={styles.menu_right}>
          {headerMenuData.map((menu) => (
            <li key={menu.code} className={menu.className ?? ''} onClick={() => console.log(menu.name)}>
              {menu.name}
            </li>
          ))}
        </ul>
      </nav>
      <h1 className={styles.header_title}>The Grand Haven</h1>
    </>
  );
};

export default TGHHeader;
