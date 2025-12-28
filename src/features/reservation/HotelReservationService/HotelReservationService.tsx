import { TGHHotelDescription, TGHHotelFeatures, TGHHotelHero, TGHHotelNotice, TGHHotelVisual } from '@/components';
import { HotelReservationEnum } from '@/enums';

interface HotelReservationServiceProps {
  reservationId: HotelReservationEnum;
}
const HotelReservationService = ({ reservationId }: HotelReservationServiceProps) => (
  <>
    <section>
      <TGHHotelHero reservationId={reservationId} />
    </section>
    <section>
      <TGHHotelFeatures />
    </section>
    <section>
      <TGHHotelVisual reservationId={reservationId} />
    </section>
    <section>
      <TGHHotelDescription reservationId={reservationId} />
    </section>
    <section>
      <TGHHotelNotice />
    </section>
  </>
);

export default HotelReservationService;
