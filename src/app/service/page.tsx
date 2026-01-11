'use client';
import { useEffect } from 'react';

import { Container } from '@mantine/core';

import { TGHFooter, TGHSubMenu } from '@/components';
import { HotelReservationEnum } from '@/enums';
import { ServicePage } from '@/features';
import { useMainStore } from '@/providers';

const Service = () => {
  const { serviceId, setReservationId } = useMainStore((state) => state);

  useEffect(() => {
    setReservationId(HotelReservationEnum.DEFAULT);
  }, []);

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
