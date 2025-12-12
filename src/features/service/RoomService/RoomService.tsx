import { TGHHotelDescription, TGHHotelFeatures, TGHHotelHero, TGHHotelNotice, TGHHotelVisual } from '@/components';

const RoomService = () => (
  <>
    <section>
      <TGHHotelHero />
    </section>
    <section>
      <TGHHotelFeatures />
    </section>
    <section>
      <TGHHotelVisual />
    </section>
    <section>
      <TGHHotelDescription />
    </section>
    <section>
      <TGHHotelNotice />
    </section>
  </>
);

export default RoomService;
