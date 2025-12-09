import { Flex, Stack, Table, Text } from '@mantine/core';

import styles from '@/components/common/TGHHotelFeatures/TGHHotelFeatures.module.css';

const TGHHotelFeatures = () => (
  <Flex className={styles.hotel_features} bg={'#fffcf6'} px={185}>
    <Table withRowBorders={false} verticalSpacing="sm">
      <Table.Thead className={styles.hotel_features_info_title}>
        <Table.Tr>
          <Table.Th>상세정보</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Thead className={styles.hotel_features_info_thead}>
        <Table.Tr>
          <Table.Th>객실 서비스</Table.Th>
          <Table.Th></Table.Th>
          <Table.Th>어메니티</Table.Th>
          <Table.Th>체크인 아웃</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody className={styles.hotel_features_info_tbody}>
        <Table.Tr>
          {/*객실 서비스*/}
          <Table.Td>
            <Stack gap={20}>
              <Text>• 무료 WIFI</Text>
              <Text>• 55인치 FULL HD TV</Text>
              <Text>• 개인용 금고</Text>
              <Text>• 블루투스 스피커</Text>
            </Stack>
          </Table.Td>
          {/* 객실 서비스 2 */}
          <Table.Td>
            <Stack gap={20}>
              <Text>• 미니바</Text>
              <Text ml={8}>(투숙 1박당 1회 무료)</Text>
              <Text>• 생수</Text>
              <Text>• 와인잔 및 와인 오프너</Text>
              <Text>• 커피포트</Text>
              <Text>• 물컵, 찻잔</Text>
              <Text>• 커피 및 차(티백)</Text>
            </Stack>
          </Table.Td>
          {/* 어메니티 */}
          <Table.Td>
            <Stack gap={20}>
              <Text>• 배스 용품 5종</Text>
              <Text ml={8}>(샴푸, 컨디셔너, 바디워시, 로션, 핸드워시)</Text>
              <Text>• 배스 타월</Text>
              <Text>• 배스 로브</Text>
              <Text>• 헤어드라이어</Text>
              <Text>• 체중계</Text>
            </Stack>
          </Table.Td>
          {/* 체크인 아웃 */}
          <Table.Td>
            <Stack gap={20}>
              <Text>Check in 03:00 PM</Text>
              <Text>Check out 11:00 AM</Text>
            </Stack>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  </Flex>
);
export default TGHHotelFeatures;
