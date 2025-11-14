import { Button } from '@mantine/core';

import { ITGHButton } from '@/types';

/**
 * TGH Button 컴포넌트
 * @param label
 * @param props
 * @constructor
 */
const TGHButton = ({ label, ...props }: ITGHButton) => (
  <>
    <Button radius={0} {...props}>
      {label}
    </Button>
  </>
);

export default TGHButton;
