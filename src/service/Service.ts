import axios from 'axios';

import { SERVER_URI } from 'appConstant/constants';
import { IResInfoRep, IResInfoUser } from './type';

class Service {
  baseUrl: string = SERVER_URI;
  axiosInstance = axios.create({ baseURL: this.baseUrl });

  getUser = async (userNameSearch: string) => {
    const res = await this.axiosInstance.get(`${this.baseUrl}users/${userNameSearch}`);
    return this.transformData(res.data);
  };

  getRepo = async (userNameSearch: string) => {
    const res = await this.axiosInstance.get(`${this.baseUrl}users/${userNameSearch}/repos`);
    return res.data.map(this.transformRepo);
  };

  transformData = (data: IResInfoUser) => {
    return {
      avatar: data.avatar_url,
      name: data.name,
      userName: data.login,
      followers: data.followers,
      following: data.following,
    };
  };

  transformRepo = (data: IResInfoRep) => {
    return {
      name: data.name,
      description: data.description,
      id: data.id,
    };
  };
}

export const service = new Service();
