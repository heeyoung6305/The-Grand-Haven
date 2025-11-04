import { Flex, Text, Title, Typography } from '@mantine/core';

import styles from './TGHExperience.module.css';

/**
 * 컴포넌트 선언 방식
 * const exampleComponent = () => {
 *   ( 컴포넌트에 대한 기능 로직 구성 )
 *   return (
 *    <>
 *      UI DOM 퍼블리싱 구성
 *    </>
 * }
 *
 * export default exampleComponent;
 */
const TGHExperience = () => (
  <>
    <Flex className={styles.about}>
      <Title className={styles.about_title}>
        The
        <br />
        Haven
        <br />
        Experience
      </Title>
      <Text className={styles.about_text} lineClamp={5} component="div">
        <Typography>
          <h3 className={styles.about_subtitle}>특별한 순간의 시작</h3>
          <p className={styles.about_description}>
            그랜드 헤이븐은 도심 속에서 진정한 휴식과 감각적인 여유를 제공하는 프리미엄 라이프스타일 호텔입니다.
            현대적인 디자인과 고급스러운 인테리어가 조화를 이루는 객실과 스위트룸은 방문객에게 안락함과 특별한 경험을
            동시에 선사합니다. <br /> 저희 호텔은 단순한 숙박을 넘어, 예술과 문화, 미식과 여가를 아우르는 경험을
            제공합니다. 세심하게 설계된 공간과 서비스를 통해 고객 한 분 한 분이 편안하게 머물며, 도심 속에서도 여유를
            느낄 수 있도록 합니다. <br /> 그랜드 헤이븐에서의 매 순간이 오래도록 기억에 남는 특별한 추억으로 빛납니다.
          </p>
        </Typography>
      </Text>
    </Flex>
  </>
);

export default TGHExperience;
