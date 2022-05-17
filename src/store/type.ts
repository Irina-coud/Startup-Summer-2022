import { IResInfoRep } from 'service/type';
import rootReducer from 'store';
import { store } from './store';

export interface IdefaultState {
  userNameSearch: string;
  userInfo: IuserInfo;
  repInfo: IResInfoRep[];
  dataLoad: boolean;
  errorUser: string | undefined;
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
