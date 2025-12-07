import { ServiceIdEnum } from '@/enums';
import { ArtCollectionService, DiningService, RoomService } from '@/features';
import { IServicePageProps } from '@/types';

const ServicePage = ({ serviceId }: IServicePageProps) => (
  <>
    {serviceId === ServiceIdEnum.ROOM && <RoomService />}
    {serviceId === ServiceIdEnum.DINING && <DiningService />}
    {serviceId === ServiceIdEnum.ART_COLLECTION && <ArtCollectionService />}
  </>
);

export default ServicePage;
