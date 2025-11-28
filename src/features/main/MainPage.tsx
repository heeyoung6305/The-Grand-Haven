import { TGHMainSearch } from '@/components';
import { TGHComfort } from '@/components/common/TGHComfort';
import { TGHDining } from '@/components/common/TGHDining';
import { TGHDiningSection01 } from '@/components/common/TGHDiningSection01';
import { TGHDiningSection02 } from '@/components/common/TGHDiningSection02';
import { TGHDiningSection03 } from '@/components/common/TGHDiningSection03';
import TGHExperienceImage from '@/components/common/TGHExperienceImage/TGHExperienceImage';
import { TGHGalleryImages } from '@/components/common/TGHGalleryImages';
import TGHOFImage from '@/components/common/TGHOFImage/TGHOFImage';
import { TGHOFSection01 } from '@/components/common/TGHOFSection01';
import { TGHOFSection02 } from '@/components/common/TGHOFSection02';
import { TGHOFSection03 } from '@/components/common/TGHOFSection03';
import { TGHRooms } from '@/components/common/TGHRooms';
import { TGHFooter } from '@/components/special/TGHFooter';
import { TGHLocation } from '@/components/special/TGHLocation';
import { ServiceIdEnum } from '@/enums';
import { useMainStore } from '@/providers';

import type { IMainPageProps } from '@/types';

import styles from './MainPage.module.css';

import './reset.css';
import { Divider } from '@mantine/core';

import { TGHArtColl } from '@/components/common/TGHArtColl';
import { TGHArtCollSection01 } from '@/components/common/TGHArtCollSection01';

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
        <section>
          <TGHLocation />
        </section>
        <footer>
          <TGHFooter />
        </footer>
        <Divider />
        <section>
          <TGHDining />
        </section>
        <section>
          <TGHDiningSection01 />
        </section>
        <section>
          <TGHDiningSection02 />
        </section>
        <section>
          <TGHDiningSection03 />
        </section>
        <footer>
          <TGHFooter />
        </footer>
        <Divider />
        <section>
          <TGHArtColl />
        </section>
        <section>
          <TGHArtCollSection01 />
        </section>
        <footer>
          <TGHFooter />
        </footer>
        <button onClick={handleRoomButtonClick}>Go to Room</button>
      </div>
    </>
  );
};

export default MainPage;
