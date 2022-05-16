import rootReducer from 'store';
import { store } from './store';

export interface IdefaultState {
  userNameSearch: string;
  userInfo: IuserInfo;
}

export interface IuserInfo {
  avatar: string;
  name: string;
  userName: string;
  followers: number;
  following: number;
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
