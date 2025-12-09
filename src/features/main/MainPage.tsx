import { Divider } from '@mantine/core';

import {
  TGHComfort,
  TGHExperienceImage,
  TGHGalleryImages,
  TGHHotelDescription,
  TGHHotelHero,
  TGHHotelVisual,
  TGHLocation,
  TGHMainSearch,
  TGHOFImage,
  TGHOFSection01,
  TGHOFSection02,
  TGHOFSection03,
  TGHRooms,
} from '@/components';

import styles from './MainPage.module.css';

import './reset.css';
import { TGHHotelFeatures } from '@/components/common/TGHHotelFeatures';

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
      <Divider />
      <section>
        <TGHHotelHero />
      </section>
      <section>
        <TGHHotelFeatures />
      </section>
      <section>
        <TGHHotelVisual />
      </section>
      <section>
        <TGHHotelDescription />
      </section>
    </div>
  </>
);

export default MainPage;
