'use client';
import { useRouter } from 'next/navigation';

import { MainPage } from '@/features';

const Home = () => {
  console.log('메인페이지');
  const router = useRouter();
  return (
    <>
      <MainPage router={router} />
    </>
  );
};

export default Home;
