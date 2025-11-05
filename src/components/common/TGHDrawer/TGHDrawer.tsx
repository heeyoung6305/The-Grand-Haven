import { Drawer } from '@mantine/core';

import type { ITGHDrawerProps } from '@/types';

const TGHDrawer = ({ ...props }: ITGHDrawerProps) => {
  const { opened, onClose, children } = props;
  return (
    <>
      <Drawer opened={opened} onClose={onClose}>
        {children}
      </Drawer>
    </>
  );
};

export default TGHDrawer;
