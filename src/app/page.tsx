'use client';
import { Container } from '@mantine/core';

import { TGHFooter, TGHHeader, TGHServiceMenu } from '@/components';
import { MainPage } from '@/features';

const Home = () => (
  <>
    <TGHHeader />
    <TGHServiceMenu />
    <Container size={1920} p={0}>
      <MainPage />
    </Container>
    <TGHFooter />
  </>
);

export default Home;
