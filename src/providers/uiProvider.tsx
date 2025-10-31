import React, { ReactNode } from 'react';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  colors: {},
  headings: {},
  components: {},
});

export const UIProvider = ({ children }: { children: ReactNode }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);
