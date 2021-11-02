export interface GetResponse {
  response: any;
  error?: any;
}

export interface PostResponse {
  postApi: Function;
  response: any;
  error: any;
}

export interface LoginResponse {
  status?: string;
  token?: string;
}