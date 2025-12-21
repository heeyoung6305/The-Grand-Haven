'use client';
import { Container } from '@mantine/core';

import { TGHFooter, TGHSubMenu } from '@/components';
import { ReservationPage } from '@/features';
import { useMainStore } from '@/providers';

const Reservation = () => {
  const { reservationId } = useMainStore((state) => state);
  return (
    <>
      <TGHSubMenu />
      <Container size={1920} p={0}>
        <ReservationPage reservationId={reservationId} />
      </Container>
      <TGHFooter />
    </>
  );
};

export default Reservation;
