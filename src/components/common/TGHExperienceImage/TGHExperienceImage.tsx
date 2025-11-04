import { BackgroundImage, Flex, Image } from '@mantine/core';

import { aboutLabel, hotelLobby01, hotelLobby02 } from '@/assets/image';
import { TGHExperience } from '@/components/common/TGHExperience';

import styles from './TGHExperienceImage.module.css';

const TGHExperienceImage = () => (
  <>
    <BackgroundImage className={styles.about_background_img} src={aboutLabel.src}>
      <Flex className={styles.about_images}>
        <Image radius="none" w="auto" fit="contain" src={hotelLobby02.src} />
        <TGHExperience />
        <Image radius="none" w="auto" fit="contain" src={hotelLobby01.src} />
      </Flex>
    </BackgroundImage>
  </>
);
export default TGHExperienceImage;
