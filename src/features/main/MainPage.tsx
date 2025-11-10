import { TGHMainSearch } from '@/components';
import { TGHComfort } from '@/components/common/TGHComfort';
import TGHExperienceImage from '@/components/common/TGHExperienceImage/TGHExperienceImage';
import { TGHGalleryImages } from '@/components/common/TGHGalleryImages';
import TGHOFImage from '@/components/common/TGHOFImage/TGHOFImage';
import { TGHOFSection01 } from '@/components/common/TGHOFSection01';
import { TGHOFSection02 } from '@/components/common/TGHOFSection02';
import { TGHOFSection03 } from '@/components/common/TGHOFSection03';
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
        </section>
        <section>
          <TGHOFImage />
          <TGHOFSection01 />
          <TGHOFSection02 />
          <TGHOFSection03 />
        </section>
        <section>
          <TGHComfort />
        </section>
        <section>
          <TGHGalleryImages />
        </section>
        <button onClick={handleRoomButtonClick}>Go to Room</button>
      </div>
    </>
  );
};

export default MainPage;
