import { Flex, Text, Title } from '@mantine/core';

import styles from './TGHSubMenu.module.css';

const TGHSubMenu = () => (
  <Flex className={styles.sub_header} px={30}>
    <Title className={styles.sub_header_title}>The Grand Haven</Title>
    <Text>EXPERIENCE</Text>
    <Text>HOTEL</Text>
    <Text>DINING</Text>
    <Text>ART COLLECTION</Text>
    <Text>GALLERY</Text>
  </Flex>
);

export default TGHSubMenu;
