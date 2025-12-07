import { Box } from '@mantine/core';

import { TGHDining, TGHDiningSection01, TGHDiningSection02, TGHDiningSection03 } from '@/components';

const DiningService = () => (
  <>
    <TGHDining />
    <Box>
      <TGHDiningSection01 />
    </Box>
    <Box>
      <TGHDiningSection02 />
    </Box>
    <Box>
      <TGHDiningSection03 />
    </Box>
  </>
);

export default DiningService;
