import { ROOM_SIMPLE_INFO_BOX_DATA } from '@/assets/data';
import { TGHRoomSimpleInfoBox } from '@/components';
import { TGHRoomsSelect } from '@/components/common/TGHRoomsSelect';

const RoomService = () => {
  console.log('room test');

  return (
    <>
      <section>
        <TGHRoomsSelect />
      </section>
      {ROOM_SIMPLE_INFO_BOX_DATA.map((data, index) => (
        <section key={`${data.title}_${index}`}>
          <TGHRoomSimpleInfoBox data={data} />
        </section>
      ))}

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
};

export default RoomService;
