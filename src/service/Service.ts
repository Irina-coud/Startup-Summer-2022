import axios from 'axios';

import { PER_PAGE, SERVER_URI } from 'appConstant/constants';
import { IResInfoRep, IResInfoUser } from './type';

class Service {
  baseUrl: string = SERVER_URI;
  axiosInstance = axios.create({ baseURL: this.baseUrl });

  getUser = async (userNameSearch: string) => {
    const res = await this.axiosInstance.get(`${this.baseUrl}users/${userNameSearch}`);
    return this.transformData(res.data);
  };

  getRepo = async (userNameSearch: string, page: number) => {
    const res = await this.axiosInstance.get(
      `${this.baseUrl}users/${userNameSearch}/repos?q=&per_page=${PER_PAGE}&page=${page}`
    );
    return res.data.map(this.transformRepo);
  };

  transformData = (data: IResInfoUser) => {
    return {
      avatar: data.avatar_url,
      name: data.name,
      userName: data.login,
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      html_url: data.html_url,
    };
  };

  transformRepo = (data: IResInfoRep) => {
    return {
      name: data.name,
      description: data.description,
      id: data.id,
      html_url: data.html_url,
    };
  };
}

export const service = new Service();
