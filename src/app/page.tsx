'use client';
import { Container } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { TGHFooter, TGHHeader, TGHServiceMenu } from '@/components';
import { MainPage } from '@/features';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <TGHHeader />
      <TGHServiceMenu router={router} />
      <Container size={1920} p={0}>
        <MainPage />
      </Container>
      <TGHFooter />
    </>
  );
};

export default Home;
