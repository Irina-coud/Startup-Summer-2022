import { createSlice } from '@reduxjs/toolkit';

import { IResInfoRep } from 'service/type';
import { IdefaultState, IuserInfo } from './type';

export const defaultState: IdefaultState = {
  userNameSearch: '',
  userInfo: {
    avatar: '',
    name: '',
    userName: '',
    followers: 0,
    following: 0,
  },
  repInfo: [],
};

const mainSlice = createSlice({
  name: 'main',
  initialState: defaultState,
  reducers: {
    updateSearchValue: (state: IdefaultState, { payload }: { payload: string }) => {
      state.userNameSearch = payload;
    },
    updateUserInfo: (state: IdefaultState, { payload }: { payload: IuserInfo }) => {
      state.userInfo = payload;
    },
    updateRepInfo: (state: IdefaultState, { payload }: { payload: IResInfoRep[] }) => {
      state.repInfo = payload;
    },
  },
});

const { actions, reducer } = mainSlice;

export default reducer;
export const { updateSearchValue, updateUserInfo, updateRepInfo } = actions;
