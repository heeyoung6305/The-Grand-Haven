import { Stack, Text } from '@mantine/core';

import styles from './TGHFooterInfoBox.module.css';

interface TGHFooterInfoBoxProps {
  title: string;
  info: string;
}

const TGHFooterInfoBox = ({ title, info }: TGHFooterInfoBoxProps) => (
  <Stack className={styles.tgh_footer_info_box} gap={14}>
    <Text h={20} lh={'20px'}>
      {title}
    </Text>
    <Text lh={'20px'} className={styles.tgh_footer_info_box_content}>
      {info}
    </Text>
  </Stack>
);

export default TGHFooterInfoBox;
