export interface IResInfoUser {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export interface IResInfoRep {
  name: string;
  description: string;
  id: number;
  html_url: string;
}
