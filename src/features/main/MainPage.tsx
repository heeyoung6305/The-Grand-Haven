import {
  GrandLounge,
  ourFacilitiesLeft,
  ourFacilitiesRight,
  safetComfort,
  TheArtOfDining,
  WineBarReserve,
} from '@/assets';
import { TGHMainSearch } from '@/components';
import TGHExperienceImage from '@/components/common/TGHExperienceImage/TGHExperienceImage';
import { TGHRooms } from '@/components/common/TGHRooms';
import { ServiceIdEnum } from '@/enums';
import { useMainStore } from '@/providers';

import type { IMainPageProps } from '@/types';

import styles from './MainPage.module.css';

import './reset.css';

const MainPage = ({ router }: IMainPageProps) => {
  const { setServiceId } = useMainStore((state) => state);
  const handleRoomButtonClick = async () => {
    setServiceId(ServiceIdEnum.ROOM);
    router.push('/service');
  };
  return (
    <>
      {/* 이미지 태그 사용 예시 */}
      {/*<img src={mainImg.src} alt={'메인페이지 이미지'} style={{ width: '100%' }} />*/}
      <div className={styles.main_page_body}>
        <section>
          <TGHMainSearch />
        </section>
        <section>
          <TGHExperienceImage />
        </section>
        <section>
          <TGHRooms />
          {/*<div>*/}
          {/*  <h1 className={styles.rooms_title}>*/}
          {/*    Premium Rooms*/}
          {/*    <br />& Suites*/}
          {/*  </h1>*/}
          {/*  <p className={styles.rooms_description}>*/}
          {/*    예술적 품격을 갖춘 모던한 디럭스 객실부터 우아한 감성의 스위트 객실과 최고급 럭셔리 풀빌라까지,*/}
          {/*    <br />*/}
          {/*    다양한 객실에서 격이 다른 휴식과 여유를 경험해 보세요.*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className={styles.rooms_reserve}>*/}
          {/*  <div>*/}
          {/*    <img src={roomsPremiumDeluxe01.src} alt={'프리미엄디럭스 왼쪽 이미지'} />*/}
          {/*    <h2 className={styles.rooms_left_title01}>프리미엄 디럭스</h2>*/}
          {/*    <p className={styles.rooms_left_description01}>*/}
          {/*      한층 여유로운 공간과 세련된 인테리어가 어우러진 프리미엄 디럭스*/}
          {/*    </p>*/}
          {/*<h2 className={styles.rooms_left_title02}>그랜드 디럭스 스위트</h2>*/}
          {/*<p className={styles.rooms_left_description02}>*/}
          {/*  클래식한 감성과 이국적인 신비로움이 가득한 그랜드 디럭스 스위트*/}
          {/*</p>*/}
          {/*<h2 className={styles.rooms_left_title03}>로열 스위트</h2>*/}
          {/*<p className={styles.rooms_left_description03}>*/}
          {/*  감탄을 자아내는 고급스러운 인테리어와 왕실의 기품이 흐르는 우아한 로열 스위트*/}
          {/*</p>*/}
          {/*    <button className={styles.rooms_arrow_btn}>*/}
          {/*      <img src={roomsArrowButton.src} alt={'rooms 화살표 버튼'} />*/}
          {/*    </button>*/}
          {/*  </div>*/}
          {/*  <div>*/}
          {/*    <img src={roomsPremiumDeluxe02.src} alt={'프리미엄디럭스 오른쪽 이미지'} />*/}
          {/*    <button className={styles.rooms_reserve_btn}>지금 예약</button>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </section>
        <section className={styles.our_facilities}>
          <div className={styles.our_facilities_images}>
            <img src={ourFacilitiesLeft.src} alt={'시설 왼쪽 이미지'} className={styles.our_facilities_left} />
            <div>
              <h1 className={styles.our_facilities_title}>
                Our
                <br />
                Faci
                <br />
                <span className={styles.lities}>Lities</span>
              </h1>
              <p className={styles.our_facilities_description}>
                다채로운 액티비티와 여유로운 휴식이 공존하는
                <br />
                그랜드 헤이븐의 특별한 시설을 즐겨보세요.
              </p>
            </div>
            <img src={ourFacilitiesRight.src} alt={'시설 오른쪽 이미지'} />
          </div>
          <div className={styles.our_facilities01}>
            <div>
              <h2 className={styles.our_facilities_title01}>
                01
                <br />
                <br />
                <br />
                The Art <br />
                Of Dining
              </h2>
              <p className={styles.our_facilities_description01}>
                고급스러운 인테리어와 세련된 분위기가 어우러진 호텔 다이닝에서 <br />
                최상급 식자재로 완성된 미쉐린 가이드 스타 레스토랑부터 프리미엄 뷔페까지 <br />
                셰프의 창의적인 요리와 다양한 와인, 그리고 라이브 음악이 선사하는 <br />
                잊지 못할 미식의 순간을 경험해보세요.
              </p>
            </div>
            <img src={TheArtOfDining.src} alt={'다이닝 메인 이미지'} />
          </div>
          <div className={styles.our_facilities02}>
            <img src={GrandLounge.src} alt={'라운지 메인 이미지'} />
            <h2 className={styles.our_facilities_title02}>02 Grand Lounge</h2>
          </div>
          <div className={styles.our_facilities03}>
            <img src={WineBarReserve.src} alt={'와인바 메인 이미지'} />
            <h2 className={styles.our_facilities_title03}>03 Wine Bar “Reserve”</h2>
          </div>
        </section>
        <section className={styles.safet_comfort}>
          <img src={safetComfort.src} alt={'서브 메인 이미지'} />
          <h1 className={styles.safet_comfort_title}>
            Where Safety
            <br />
            Meets Comfort
          </h1>
          <p className={styles.safet_comfort_description}>
            친환경 인증을 받은 안전한 소재로 장식된 모든 객실에서 편안하고 안심할 수 있는 숙박 경험을 즐겨보세요.
          </p>
        </section>
        <button onClick={handleRoomButtonClick}>Go to Room</button>
      </div>
    </>
  );
};

export default MainPage;
