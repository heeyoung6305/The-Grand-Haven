import { HotelReservationEnum } from '@/enums';
import { HotelReservationService } from '@/features';

interface ReservationPageProps {
  reservationId?: HotelReservationEnum;
}
const ReservationPage = ({ reservationId }: ReservationPageProps) => (
  <>
    {(reservationId === HotelReservationEnum.PREMIUM_DELUXE ||
      reservationId === HotelReservationEnum.GRAND_DELUXE ||
      reservationId === HotelReservationEnum.ROYAL_SUIT) && <HotelReservationService reservationId={reservationId} />}
  </>
);

export default ReservationPage;
