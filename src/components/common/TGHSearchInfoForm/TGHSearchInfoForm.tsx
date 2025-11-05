import { Stack, Text } from '@mantine/core';

import styles from './TGHSearchInfoForm.module.css';

interface ITGHSearchInfoFormProps {
  title: string;
  info: string;
  onClick?: () => void;
}

const TGHSearchInfoForm = ({ title, info, onClick }: ITGHSearchInfoFormProps) => (
  <>
    <Stack className={styles.tgh_main_search_search_form_stack} onClick={onClick}>
      <Text className={styles.tgh_main_search_search_form_title}>{title}</Text>
      <Text className={styles.tgh_main_search_search_form_info}>{info}</Text>
    </Stack>
  </>
);

export default TGHSearchInfoForm;
