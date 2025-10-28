import React, { ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

// const theme = createTheme({
//   primaryColor: 'default',
//   fontFamily: 'Pretendard, Arial, Helvetica, sans-serif',
//   colors: {
//     default: defaultColor,
//     black: blackColor,
//     gray: grayColor,
//     buttonBlack: buttonBlackColor,
//     buttonWhite: buttonWhiteColor,
//   },
//   headings: {
//     sizes: {
//       h4: {
//         fontWeight: '600',
//         lineHeight: '1.4',
//         fontSize: '1rem',
//       },
//     },
//   },
//   components: {
//   },
// });

export const UIProvider = ({ children }: { children: ReactNode }) => <MantineProvider>{children}</MantineProvider>;
