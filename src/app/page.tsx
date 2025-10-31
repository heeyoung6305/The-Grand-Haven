'use client';
import { Box, Container } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { TGHHeader, TGHServiceMenu } from '@/components';
import { MainPage } from '@/features';

import styles from './page.module.css';

const Home = () => {
  const router = useRouter();

  return (
    <Box className={styles.root_page_box}>
      <TGHHeader />
      <TGHServiceMenu />
      <Container size={1920} px={30} p={0}>
        <MainPage router={router} />
      </Container>
    </Box>
  );
};

export default Home;
