import { BackgroundImage, Box } from '@mantine/core';

import { safetComfort } from '@/assets';
import styles from '@/components/common/TGHComfort/TGHComfort.module.css';

const TGHComfort = () => (
  <>
    <BackgroundImage className={styles.comfort_background_img} src={safetComfort.src}>
      <Box px={30}>
        <h1 className={styles.comfort_title}>
          Where Safety
          <br />
          Meets Comfort
        </h1>
      </Box>
    </BackgroundImage>
    <p className={styles.comfort_description}>
      친환경 인증을 받은 안전한 소재로 장식된 모든 객실에서 편안하고 안심할 수 있는 숙박 경험을 즐겨보세요.
    </p>
  </>
);
export default TGHComfort;
