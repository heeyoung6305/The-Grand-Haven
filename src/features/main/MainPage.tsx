import { useEffect } from 'react';

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
import { ServiceMenuEnum } from '@/enums';
import { useMainStore } from '@/providers';

import styles from './MainPage.module.css';

import './reset.css';

const MainPage = () => {
  const { menuId } = useMainStore((state) => state);

  useEffect(() => {
    if (!menuId) return;

    const el = document.getElementById(menuId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [menuId]);
  return (
    <>
      <div className={styles.main_page_body}>
        <section>
          <TGHMainSearch />
        </section>
        <section id={ServiceMenuEnum.EXPERIENCE}>
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
        <section id={ServiceMenuEnum.GALLERY}>
          <TGHGalleryImages />
        </section>
        <section>
          <TGHLocation />
        </section>
      </div>
    </>
  );
};

export default MainPage;
