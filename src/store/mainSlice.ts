import { createSlice } from '@reduxjs/toolkit';

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
  },
});

const { actions, reducer } = mainSlice;

export default reducer;
export const { updateSearchValue, updateUserInfo } = actions;
