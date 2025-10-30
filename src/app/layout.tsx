import { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@mantine/core/styles.css';
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
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            function setViewPort() {
              const targetWidth = 1440;
              const deviceWidth = window.outerWidth;
              const deviceHeight = window.outerHeight;
              const isPortrait = false;

              const effectiveWidth = isPortrait ? deviceHeight : deviceWidth;
              let scale = effectiveWidth < targetWidth ? effectiveWidth / targetWidth : 1;
              scale = Math.floor(scale * 1000) / 1000;

              const viewportMeta = document.querySelector('meta[name="viewport"]');
              const metaContent = \`width=\${targetWidth}, initial-scale=\${scale}, viewport-fit=cover, minimum-scale=\${scale}\`;

              if (viewportMeta) {
                viewportMeta.content = metaContent;
              }
            }

            // 초기 로드 시
            window.addEventListener('DOMContentLoaded', setViewPort);
            
            // 리사이즈 시
            window.addEventListener('resize', setViewPort);
            
            // 페이지 전환 후
            document.addEventListener('next:route-change-complete', setViewPort);
          })();
        `,
        }}
      />
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
