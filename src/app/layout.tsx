import { ReactNode } from 'react';

import type { Metadata } from 'next';

import './globals.css';

import { MainStoreProvider, UIProvider } from '@/providers';

export const metadata: Metadata = {
  title: 'The Grand Haven',
  description: 'The Grand Haven Project',
};

/**
 * root layout
 * external, internal 부분에서 실행될 필요가 없는 provider 에 대해 분기처리 하기 위해 별도 설정함.
 * 공통 적인 provider 부분만 정의
 * @param children
 * @constructor
 */
const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="ko">
    <head>
      <title />
    </head>
    <body>
      <UIProvider>
        <MainStoreProvider>{children}</MainStoreProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
