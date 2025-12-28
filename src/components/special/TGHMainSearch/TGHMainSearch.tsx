import { useState } from 'react';

import {
  ActionIcon,
  BackgroundImage,
  Box,
  CloseButton,
  Divider,
  Flex,
  Group,
  Popover,
  Stack,
  Text,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';

import { mainImg } from '@/assets/image';
import { TGHButton, TGHSearchInfoForm } from '@/components';

import styles from './TGHMainSearch.module.css';

type CounterRowProps = {
  label: string;
  value: number;
  min?: number;
  onChange: (value: number) => void;
};

const CounterRow = ({ label, value, min = 0, onChange }: CounterRowProps) => {
  const description = label === '성인' ? '(만 13세 이상)' : '(37개월~만 12세)';
  return (
    <Group justify="space-between">
      <Flex>
        <Text fw={500}>{label}</Text>
        <Text ta="center">{description}</Text>
      </Flex>
      <Group gap="xs">
        <ActionIcon variant="outline" onClick={() => onChange(Math.max(min, value - 1))} disabled={value <= min}>
          -
        </ActionIcon>

        <Text ta="center">{value}</Text>

        <ActionIcon variant="outline" onClick={() => onChange(value + 1)}>
          +
        </ActionIcon>
      </Group>
    </Group>
  );
};

type ActivePanel = 'date' | 'room' | null;

const TGHMainSearch = () => {
  const [popoverOpened, popoverOpenHook] = useDisclosure(false);
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [roomInfo, setRoomInfo] = useState({
    adult: 0,
    child: 0,
  });

  return (
    <Box bg="#ede9e4" px={30}>
      <Box>
        <BackgroundImage className={styles.tgh_main_search_background_img} src={mainImg.src}>
          <Popover
            opened={popoverOpened}
            onClose={() => {
              close();
              setActivePanel(null);
            }}
            position="bottom"
            offset={10}
            withinPortal={false}
            width="target"
          >
            <Popover.Target>
              <Flex className={styles.tgh_main_search_background_img_flex}>
                {/* 체크인 / 체크아웃 */}
                <TGHSearchInfoForm
                  title="체크인 / 체크아웃"
                  info={
                    range[0] && range[1]
                      ? `${range[0].toLocaleDateString('ko-KR')} - ${range[1].toLocaleDateString('ko-KR')}`
                      : '날짜 선택'
                  }
                  onClick={() => {
                    setActivePanel('date');
                    popoverOpenHook.open();
                  }}
                />
                <Divider className={styles.tgh_main_search_divider} orientation="vertical" size={3} />
                {/* 객실 및 인원 */}
                <TGHSearchInfoForm
                  title="객실 및 인원"
                  info="객실 1개, 투숙객 1인"
                  onClick={() => {
                    setActivePanel('room');
                    popoverOpenHook.open();
                  }}
                />
              </Flex>
            </Popover.Target>
            <Popover.Dropdown className={activePanel === 'date' ? styles.date_dropdown : styles.room_dropdown}>
              {activePanel === 'date' && (
                <Flex>
                  <DatePicker
                    type="range"
                    value={range}
                    onChange={(value) =>
                      setRange([value?.[0] ? new Date(value[0]) : null, value?.[1] ? new Date(value[1]) : null])
                    }
                    numberOfColumns={2}
                    size="lg"
                  />
                  <CloseButton variant={'transparent'} onClick={() => popoverOpenHook.close()} />
                </Flex>
              )}

              {activePanel === 'room' && (
                <Box>
                  <Stack gap="lg">
                    <Text>투숙인원 선택</Text>
                    <CounterRow
                      label="성인"
                      value={roomInfo.adult}
                      min={0}
                      onChange={(value) => setRoomInfo((prev) => ({ ...prev, adult: value }))}
                    />
                    <CounterRow
                      label="어린이"
                      value={roomInfo.child}
                      min={0}
                      onChange={(value) => setRoomInfo((prev) => ({ ...prev, child: value }))}
                    />
                  </Stack>
                </Box>
              )}
            </Popover.Dropdown>
          </Popover>
          <TGHButton className={styles.tgh_main_search_btn} label="상품 검색" />
        </BackgroundImage>
      </Box>
    </Box>
  );
};

export default TGHMainSearch;
