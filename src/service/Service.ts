import axios from 'axios';

import { SERVER_URI } from 'appConstant/constants';
import { IRescard } from './type';

class Service {
  baseUrl: string = SERVER_URI;
  axiosInstance = axios.create({ baseURL: this.baseUrl });

  getUser = async (userNameSearch: string) => {
    const res = await this.axiosInstance.get(`${this.baseUrl}users/${userNameSearch}`);
    return this.transformData(res.data);
  };

  transformData = (data: IRescard) => {
    return {
      avatar: data.avatar_url,
      name: data.name,
      userName: data.login,
      followers: data.followers,
      following: data.following,
    };
  };
}

export const service = new Service();
