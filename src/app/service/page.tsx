'use client';
import { Container } from '@mantine/core';

import { TGHFooter, TGHSubMenu } from '@/components';
import { ServicePage } from '@/features';
import { useMainStore } from '@/providers';

const Service = () => {
  // const router = useRouter();
  const { serviceId } = useMainStore((state) => state);
  return (
    <>
      <TGHSubMenu />
      <Container size={1920} p={0}>
        <ServicePage serviceId={serviceId} />
      </Container>
      <TGHFooter />
    </>
  );
};

export default Service;
