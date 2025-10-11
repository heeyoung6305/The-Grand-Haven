import { ServiceIdEnum } from '@/enums';
import { useMainStore } from '@/providers';
import { IMainPageProps } from '@/types';

const MainPage = ({ router }: IMainPageProps) => {
  const { setServiceId } = useMainStore((state) => state);
  const handleRoomButtonClick = async () => {
    setServiceId(ServiceIdEnum.ROOM);
    router.push('/service');
  };
  return (
    <>
      <div>MainPage</div>
        <h1>브랜치 테스트</h1>
      <button onClick={handleRoomButtonClick}>Go to Room</button>
      <h1>조승혁 바보</h1>
    </>
  );
};

export default MainPage;
