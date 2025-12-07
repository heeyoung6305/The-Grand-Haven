'use client';
import { Container } from '@mantine/core';
import { useRouter } from 'next/navigation';

import { TGHFooter, TGHHeader, TGHServiceMenu } from '@/components';
import { ServicePage } from '@/features';
import { useMainStore } from '@/providers';

const Service = () => {
  const router = useRouter();
  const { serviceId } = useMainStore((state) => state);
  return (
    <>
      <TGHHeader />
      <TGHServiceMenu router={router} />
      <Container size={1920} p={0}>
        <ServicePage serviceId={serviceId} />
      </Container>
      <TGHFooter />
    </>
  );
};

export default Service;
