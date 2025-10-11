import { ServiceIdEnum } from '@/enums';
import { RoomServicePage } from '@/features';
import { IServicePageProps } from '@/types';

const ServicePage = ({ serviceId }: IServicePageProps) => {
  console.log('/features/ServicePage');
  return (
    <>
      ServicePage
      {serviceId === ServiceIdEnum.ROOM && <RoomServicePage />}
    </>
  );
};

export default ServicePage;
