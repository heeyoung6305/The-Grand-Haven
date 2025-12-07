import { Divider } from '@mantine/core';

import {
  TGHArtColl,
  TGHArtCollHero,
  TGHComfort,
  TGHExperienceImage,
  TGHGalleryImages,
  TGHHotelHero,
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
        <TGHArtColl />
      </section>
      <section>
        <TGHArtCollHero />
      </section>
      <Divider />
      <section>
        <TGHHotelHero />
      </section>
    </div>
  </>
);

export default MainPage;
