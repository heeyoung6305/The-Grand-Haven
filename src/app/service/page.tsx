'use client';
import { ServicePage } from '@/features';
import { useMainStore } from '@/providers';

const Service = () => {
  console.log('Service 페이지');
  const { serviceId } = useMainStore((state) => state);
  return (
    <>
      <ServicePage serviceId={serviceId} />
    </>
  );
};

export default Service;
