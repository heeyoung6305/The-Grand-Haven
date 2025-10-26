import { roomsArrowButton } from '@/assets';
import { SERVICE_MENU_DATA } from '@/assets/data';
import { TGHHeader, TGHMenu } from '@/components';
import { ServiceIdEnum } from '@/enums';
import { useMainStore } from '@/providers';
import { IMainPageProps } from '@/types';

import styles from './MainPage.module.css';

import './reset.css';

const MainPage = ({ router }: IMainPageProps) => {
  const { setServiceId } = useMainStore((state) => state);
  const handleRoomButtonClick = async () => {
    setServiceId(ServiceIdEnum.ROOM);
    router.push('/service');
  };
  console.log(SERVICE_MENU_DATA);
  return (
    <>
      {/* 이미지 태그 사용 예시 */}
      {/*<img src={mainImg.src} alt={'메인페이지 이미지'} style={{ width: '100%' }} />*/}
      <div className={styles.main_page_body}>
        <header>
          <TGHHeader />
        </header>
        <TGHMenu />
        <section className={styles.hero}>
          <div className={styles.hero_content}>
            <div className={styles.hero_image}>
              <div className={styles.hero_text}>
                <div className={styles.box01}>
                  <button className={styles.check_btn}>
                    <h5>체크인 / 체크아웃</h5>
                    <br />
                    <h4>2025. 11. 01 - 2025. 11. 02</h4>
                  </button>
                  <button className={styles.guest_btn}>
                    <h5>객실 및 인원</h5>
                    <br />
                    <h4>객실 1개, 투수객 1인 &#9660;</h4>
                  </button>
                </div>
                <div className={styles.box02}>
                  <button className={styles.search_btn}>
                    <h4>상품 검색</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.about_images}>
            <div className={styles.about_large}></div>
            <div className={styles.about_text}>
              <h2 className={styles.about_title01}>
                The
                <br />
                Haven
                <br />
                Experience
              </h2>
              <div className={styles.about_title02}>
                <h3 className={styles.about_subtitle}>특별한 순간의 시작</h3>
                <p className={styles.about_description}>
                  그랜드 헤이븐은 도심 속에서 진정한 휴식과 감각적인 여유를 제공하는 프리미엄 라이프스타일 호텔입니다.
                  현대적인 디자인과 고급스러운 인테리어가 조화를 이루는 객실과 스위트룸은 방문객에게 안락함과 특별한
                  경험을 동시에 선사합니다. <br /> 저희 호텔은 단순한 숙박을 넘어, 예술과 문화, 미식과 여가를 아우르는
                  경험을 제공합니다. 세심하게 설계된 공간과 서비스를 통해 고객 한 분 한 분이 편안하게 머물며, 도심
                  속에서도 여유를 느낄 수 있도록 합니다. <br /> 그랜드 헤이븐에서의 매 순간이 오래도록 기억에 남는
                  특별한 추억으로 빛납니다.
                </p>
              </div>
            </div>
            <div className={styles.about_small}></div>
          </div>
        </section>
        <section className={styles.rooms}>
          <div>
            <h1 className={styles.rooms_title}>
              Premium Rooms
              <br />& Suites
            </h1>
            <p className={styles.rooms_description}>
              예술적 품격을 갖춘 모던한 디럭스 객실부터 우아한 감성의 스위트 객실과 최고급 럭셔리 풀빌라까지,
              <br />
              다양한 객실에서 격이 다른 휴식과 여유를 경험해 보세요.
            </p>
          </div>
          <div className={styles.rooms_reserve}>
            <div className={styles.rooms_left}>
              <div className={styles.rooms_left_images}></div>
              <h2 className={styles.rooms_left_title01}>프리미엄 디럭스</h2>
              <p className={styles.rooms_left_description01}>
                한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스
              </p>
              {/*<h2 className={styles.rooms_left_title02}>그랜드 디럭스 스위트</h2>*/}
              {/*<p className={styles.rooms_left_description02}>*/}
              {/*  클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트*/}
              {/*</p>*/}
              {/*<h2 className={styles.rooms_left_title03}>로열 스위트</h2>*/}
              {/*<p className={styles.rooms_left_description03}>*/}
              {/*  감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트*/}
              {/*</p>*/}
              <button className={styles.rooms_arrow_btn}>
                <img src={roomsArrowButton.src} alt={'rooms 화살표 버튼'} />
              </button>
            </div>
            <div className={styles.rooms_right}>
              <div className={styles.rooms_right_images}></div>
              <button className={styles.rooms_reserve_btn}>지금 예약</button>
            </div>
          </div>
        </section>
        <button onClick={handleRoomButtonClick}>Go to Room</button>
      </div>
    </>
  );
};

export default MainPage;
