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
import { TGHRoomsDeluxe } from '@/components/common/TGHRoomsDeluxe';

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
        <TGHRoomsDeluxe />
      </section>
    </div>
  </>
);

export default MainPage;
