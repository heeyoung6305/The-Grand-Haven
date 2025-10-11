import { devtools, persist } from 'zustand/middleware';
import { createStore, StoreApi } from 'zustand/vanilla';

import { ServiceIdEnum } from '@/enums';

/**
 * 메인 전역 상태 정보
 */
export interface IMainState {
  /** 선택한 메뉴 정보 */
  serviceId?: ServiceIdEnum;
}

/**
 * 메인 전역 상태의 함수 정보
 */
export interface IMainActions {
  setServiceId: (serviceId: ServiceIdEnum) => void;
  resetMainStore: () => void;
}

/** 메인 전역 상태 타입 정의 */
export type IMainStore = IMainState & IMainActions;

/** 메인 전역 상태 기본(초기)값 설정 */
export const defaultInitMainState: IMainState = {};

/**
 * 메인 전역상태 생성 함수
 * @param initState
 */
export const createMainStore = (initState: IMainState = defaultInitMainState): StoreApi<IMainStore> =>
  createStore<IMainStore>()(
    devtools(
      persist(
        (set) => ({
          ...initState,
          setServiceId: (newServiceId: ServiceIdEnum) =>
            set((state: IMainStore) => ({ ...state, serviceId: newServiceId })),
          resetMainStore: () => set(initState),
        }),
        { name: 'mainStore' },
      ),
      { name: 'mainStore', serialize: { options: true } },
    ),
  );
