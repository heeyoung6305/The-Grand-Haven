import styles from '@/features/main/MainPage.module.css';

/**
 * TGH 헤더 컴포넌트
 * @constructor
 */
const TGHHeader = () => (
  <>
    <nav>
      <ul className={styles.menu_right}>
        <li>로그인</li>
        <li>회원가입</li>
        <li>KR &#9660;</li>
        <li className={styles.book_btn}>예약하기</li>
      </ul>
    </nav>
    <h1 className={styles.header_title}>The Grand Haven</h1>
  </>
);

export default TGHHeader;
