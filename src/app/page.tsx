'use client';
import { Box, Container } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { TGHHeader, TGHMenu } from '@/components';
import { MainPage } from '@/features';

import styles from './page.module.css';

const Home = () => {
  const router = useRouter();
  return (
    <Box className={styles.root_page_box}>
      <TGHHeader />
      <TGHMenu />
      <Container w={1014} px={30} p={0} m={'auto'}>
        <MainPage router={router} />
      </Container>
    </Box>
  );
};

export default Home;
