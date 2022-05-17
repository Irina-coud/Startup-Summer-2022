export interface IResInfoUser {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface IResInfoRep {
  name: string;
  description: string;
  id: number;
}
