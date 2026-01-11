import { useEffect, useState } from 'react';

import { ActionIcon, BackgroundImage, Box, Divider, Flex, Group, Popover, Stack, Text } from '@mantine/core';
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
  /** Popover open state */
  const [popoverOpened, popoverOpenHook] = useDisclosure(false);
  /** 체크인/아웃 or 객실/인원 선택 값 state */
  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  /** 체크인/아웃 최종 state */
  const [confirmedRange, setConfirmedRange] = useState<[Date, Date] | null>(null);
  /** date-picker 체크인/아웃 state */
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  /** 객실 인원 state */
  const [roomInfo, setRoomInfo] = useState({
    adult: 0,
    child: 0,
  });

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    setConfirmedRange([today, tomorrow]);
    setRange([today, tomorrow]);
  }, []);

  return (
    <Box bg="#ede9e4" px={30}>
      <Box>
        <BackgroundImage className={styles.tgh_main_search_background_img} src={mainImg.src}>
          <Popover
            opened={popoverOpened}
            onDismiss={() => {
              setActivePanel(null);
              popoverOpenHook.close();
            }}
            position="bottom"
            offset={10}
            closeOnClickOutside
            closeOnEscape
            width="target"
          >
            <Popover.Target>
              <Flex className={styles.tgh_main_search_background_img_flex}>
                {/* 체크인 / 체크아웃 */}
                <TGHSearchInfoForm
                  title="체크인 / 체크아웃"
                  info={
                    confirmedRange
                      ? `${confirmedRange[0].toLocaleDateString('ko-KR')} - ${confirmedRange[1].toLocaleDateString('ko-KR')}`
                      : ''
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
                    onChange={(value) => {
                      if (!value) return;

                      const [start, end] = value;

                      const startDate = start ? new Date(start) : null;
                      const endDate = end ? new Date(end) : null;

                      setRange([startDate, endDate]);

                      if (startDate && endDate) {
                        setConfirmedRange([startDate, endDate]);
                        popoverOpenHook.close();
                        setActivePanel(null);
                      }
                    }}
                    numberOfColumns={2}
                    size="xl"
                    firstDayOfWeek={0}
                    minDate={new Date()}
                  />
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
