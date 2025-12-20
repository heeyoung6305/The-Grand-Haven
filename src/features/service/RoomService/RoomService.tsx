import { TGHRoomsGrand } from '@/components/common/TGHRoomsGrand';
import { TGHRoomsPremium } from '@/components/common/TGHRoomsPremium';
import { TGHRoomsRoyal } from '@/components/common/TGHRoomsRoyal';
import { TGHRoomsSelect } from '@/components/common/TGHRoomsSelect';

const RoomService = () => (
  <>
    <section>
      <TGHRoomsSelect />
    </section>
    <section>
      <TGHRoomsPremium />
    </section>
    <section>
      <TGHRoomsGrand />
    </section>
    <section>
      <TGHRoomsRoyal />
    </section>

    {/*<section>*/}
    {/*  <TGHHotelHero />*/}
    {/*</section>*/}
    {/*<section>*/}
    {/*  <TGHHotelFeatures />*/}
    {/*</section>*/}
    {/*<section>*/}
    {/*  <TGHHotelVisual />*/}
    {/*</section>*/}
    {/*<section>*/}
    {/*  <TGHHotelDescription />*/}
    {/*</section>*/}
    {/*<section>*/}
    {/*  <TGHHotelNotice />*/}
    {/*</section>*/}
  </>
);

export default RoomService;
