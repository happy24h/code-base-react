export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export enum PageEnum {
  list,
  add,
  edit,
}
export interface TokenUser {
  accessToken: string;
  refreshToken: string;
}
