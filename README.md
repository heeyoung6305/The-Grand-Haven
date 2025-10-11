**## 프로젝트 폴더 구조
```bash
root
├── src
│   ├── app            : Nextjs 에서 제공되는 router 폴더
│   ├── assets         : 앱 전체에서 공유되는 모든 Image 모음
│   ├── components     : 앱 전체에서 공유되는 모든 컴포넌트
│   ├── features       : 앱의 features를 포함하는 폴더. 이 폴더 안에 대부분의 앱 코드가 저장됨
│   │   ├── components : 해당 feature 에서만 사용되는 컴포넌트 모음 
│   │   ├── hooks      : 해당 feature 에서만 사용되는 hook 모음 
│   │   ├── stores     : 해당 feature 에서만 사용되는 store 모음 
│   │   └── types      : 해당 feature 에서만 사용되는 Typescript 모음 
│   ├── hooks          : 앱 전체에서 공유되는 모든 hook
│   ├── providers      : Context 주입을 위해 사용되는 Provider 들
│   ├── services       : services를 담는 폴더 (애플리케이션의 핵심 비즈니스 로직이나 외부 API와의 통신, 데이터 변환, 유틸리티 함수 등의 기능을 의미한다.)
│   ├── stores         : 전역 state stores
│   ├── types          : 앱 전체에서 공유되는 타입스크립트 타입
│   └── utils          : 앱 전체에서 공유되는 utility 함수들
├── .eslintrc.json     : eslint 설정 파일
├── .gitignore         : git 무시 설정 파일
├── .npmrc             : node package manager 파일
├── .prettierignore    : prettier 무시 설정 파일
├── .prettierrc        : prettier 설정 파일
├── next.config.ts     : nextjs 설정 파일
├── next-env.d.ts      : next 환경 설정 파일
├── package.json       : 패키지 파일
├── yarn.lock          : yarn third-pary 버전 락 파일
├── postcss.config.mjs : postcss 설정 파일
├── server.js          : local 에서 https 사용을 위한 서버 구동 파일
└── tsconfig.json      : 타입스크립트 설정 파일
```