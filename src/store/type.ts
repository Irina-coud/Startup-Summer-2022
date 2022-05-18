import { IResInfoRep } from 'service/type';
import rootReducer from 'store';
import { store } from './store';

export interface IDefaultState {
  userNameSearch: string;
  userInfo: IUserInfo;
  repInfo: IResInfoRep[];
  dataLoad: boolean;
  errorUser: string | undefined;
  page: number;
  statusLoad: string;
}

export interface IUserInfo {
  avatar: string;
  name: string;
  userName: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
