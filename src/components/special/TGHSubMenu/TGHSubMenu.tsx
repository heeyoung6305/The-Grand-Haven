import { Flex, Text, Title } from '@mantine/core';

import styles from '@/components/special/TGHHeader/TGHHeader.module.css';

const TGHSubMenu = () => (
  <Flex className={styles.sub_header_text}>
    <Title className={styles.sub_header_title}>
      The Grand Haven
      <Text>EXPERIENCE</Text>
      <Text>HOTEL</Text>
      <Text>DINING</Text>
      <Text>ART COLLECTION</Text>
      <Text>GALLERY</Text>
    </Title>
  </Flex>
);

export default TGHSubMenu;
