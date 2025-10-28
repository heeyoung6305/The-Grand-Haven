**## 프로젝트 폴더 구조

```bash
root
├── src
│   ├── app            : Nextjs 에서 제공되는 router 폴더
│   ├── assets         : 앱 전체에서 공유되는 모든 Image 모음
│   ├── components     : 앱 전체에서 공유되는 모든 컴포넌트
│   ├── features       : 앱의 features를 포함하는 폴더. 이 폴더 안에 대부분의 앱 코드가 저장됨
│   │   ├── login      : 로그인 페이지
│   │   ├── main       : 메인 페이지 
│   │   └── service    : 서비스별 페이지 모음
│   ├── hooks          : 앱 전체에서 공유되는 모든 hook
│   ├── providers      : Context 주입을 위해 사용되는 Provider 들
│   ├── stores         : 전역 state stores
│   ├── types          : 앱 전체에서 공유되는 타입스크립트 타입
│   └── utils          : 앱 전체에서 공유되는 utility 함수들
├── .eslintrc.json     : eslint 설정 파일
├── .gitignore         : git 무시 설정 파일
├── .prettierrc        : prettier 설정 파일
├── next.config.ts     : nextjs 설정 파일
├── next-env.d.ts      : next 환경 설정 파일
├── package.json       : 패키지 파일
├── pnpm-lock          : pnpm third-pary 버전 락 파일
└── tsconfig.json      : 타입스크립트 설정 파일
```