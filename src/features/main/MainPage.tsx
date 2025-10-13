import { ServiceIdEnum } from '@/enums';
import { useMainStore } from '@/providers';
import { IMainPageProps } from '@/types';

import styles from './MainPage.module.css';

const MainPage = ({ router }: IMainPageProps) => {
  const { setServiceId } = useMainStore((state) => state);
  const handleRoomButtonClick = async () => {
    setServiceId(ServiceIdEnum.ROOM);
    router.push('/service');
  };
  return (
    <>
      <div className={styles.main_page_body}>
        <header>
          <h1>The Grand Haven</h1>
          <nav>
            <ul className={styles.menu_left}>
              <li>EXPERIENCE</li>
              <li>HOTEL</li>
              <li>DINING</li>
              <li>ART-TAINMENT</li>
              <li>GALLERY</li>
            </ul>
            <ul className={styles.menu_right}>
              <li>로그인</li>
              <li>회원가입</li>
              <li>KR &#9660;</li>
              <li>예약하기</li>
            </ul>
          </nav>
        </header>
        <section className={styles.hero}>
          <div className={styles.hero_content}>
            <div className={styles.hero_image}></div>
            <div className={styles.hero_text}>
              <form action="">
                <label htmlFor="check">체크인 / 체크아웃</label>
                <input type="date" className={'check'} />
                {/*<a href="#" className={'check-btn'}>*/}
                {/*  <h5>체크인 / 체크아웃</h5>*/}
                {/*  <br />*/}
                {/*  <h4>2025. 11. 01 ~ 2025. 11. 02</h4>*/}
                {/*</a>*/}
              </form>
              <a href="#" className={styles.guest_btn}>
                <h5>객실 및 인원</h5>
                <br />
                <h4>객실 1개, 투수객 1인 &#9660;</h4>
              </a>
              <a href="#" className={styles.search_btn}>
                <h4>상품 검색</h4>
              </a>
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.about_content}>
            <h2>
              The
              <br />
              Haven
              <br />
              Experience
            </h2>
            <h3>특별한 순간의 시작</h3>
            <p>
              그랜드 헤이븐은 도심 속에서 진정한 휴식과 감각적인 여유를 제공하는 프리미엄 라이프스타일 호텔입니다.
              현대적인 디자인과 고급스러운 인테리어가 조화를 이루는 객실과 스위트룸은 방문객에게 안락함과 특별한 경험을
              동시에 선사합니다.  저희 호텔은 단순한 숙박을 넘어, 예술과 문화, 미식과 여가를 아우르는 경험을 제공합니다.
              세심하게 설계된 공간과 서비스를 통해 고객 한 분 한 분이 편안하게 머물며, 도심 속에서도 여유를 느낄 수
              있도록 합니다.  그랜드 헤이븐에서의 매 순간이 오래도록 기억에 남는 특별한 추억으로 빛납니다.
            </p>
          </div>
        </section>
        <button onClick={handleRoomButtonClick}>Go to Room</button>
      </div>
    </>
  );
};

export default MainPage;
