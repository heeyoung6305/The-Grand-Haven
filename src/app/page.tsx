'use client';
import { Container } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { TGHHeader, TGHServiceMenu } from '@/components';
import { MainPage } from '@/features';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <TGHHeader />
      <TGHServiceMenu />
      <Container size={1920} p={0}>
        <MainPage router={router} />
      </Container>
    </>
  );
};

export default Home;
