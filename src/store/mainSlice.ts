import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { service } from 'service/Service';
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
  dataLoad: false,
  errorUser: '',
};

export const updateUserInfo = createAsyncThunk<IuserInfo, string, { rejectValue: string }>(
  'main/user',
  async (userNameSearch: string, { rejectWithValue }) => {
    try {
      const data = await service.getUser(userNameSearch);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error?.response?.data.message);
      } else {
        return rejectWithValue('Something went wrong...');
      }
    }
  }
);

export const updateRepInfo = createAsyncThunk<IResInfoRep[], string, { rejectValue: string }>(
  'main/repo',
  async (userNameSearch: string, { rejectWithValue }) => {
    try {
      const data = await service.getRepo(userNameSearch);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error?.response?.data.message);
      } else {
        return rejectWithValue('Something went wrong...');
      }
    }
  }
);

const mainSlice = createSlice({
  name: 'main',
  initialState: defaultState,
  reducers: {
    updateSearchValue: (state: IdefaultState, { payload }: { payload: string }) => {
      state.userNameSearch = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateUserInfo.fulfilled, (state: IdefaultState, { payload }) => {
        state.userInfo = payload;
        state.dataLoad = true;
        state.errorUser = '';
      })
      .addCase(updateUserInfo.rejected, (state: IdefaultState, { payload }) => {
        state.errorUser = payload;
        state.dataLoad = false;
      })
      .addCase(updateRepInfo.fulfilled, (state: IdefaultState, { payload }) => {
        state.repInfo = payload;
        state.dataLoad = true;
      });
  },
});

const { actions, reducer } = mainSlice;

export default reducer;
export const { updateSearchValue } = actions;
