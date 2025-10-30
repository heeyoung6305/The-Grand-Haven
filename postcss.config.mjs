/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-preset-mantine': {
      autoRem: true, // 해당 속성으로 인해 px 를 작성하여도 mantine 에서 rem 단위로 변경해줌
    },
  },
};

export default config;
