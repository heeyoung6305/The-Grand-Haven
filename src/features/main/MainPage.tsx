import {
  TGHComfort,
  TGHExperienceImage,
  TGHGalleryImages,
  TGHLocation,
  TGHMainSearch,
  TGHOFImage,
  TGHOFSection01,
  TGHOFSection02,
  TGHOFSection03,
  TGHRooms,
} from '@/components';
import { TGHRoomsSelect } from '@/components/common/TGHRoomsSelect';

import styles from './MainPage.module.css';

import './reset.css';
import { TGHRoomsPremium } from '@/components/common/TGHRoomsPremium';
import { TGHRoomsGrand } from '@/components/common/TGHRoomsGrand';
import { TGHRoomsRoyal } from '@/components/common/TGHRoomsRoyal';

const MainPage = () => (
  <>
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
      <section>
        <TGHRoomsSelect />
      </section>
      <section>
        <TGHRoomsPremium />
      </section>
      <section>
        <TGHRoomsGrand />
      </section>
      <section>
        <TGHRoomsRoyal />
      </section>
    </div>
  </>
);

export default MainPage;
