import request from "../request";

export type UserRegisterProps = {
  username: string;
  email: string;
  password: string;
};

export type UserLoginProps = Omit<UserRegisterProps, "email">;

export type UserInfoProps = { usename: string | null | undefined };

export function register(data: UserRegisterProps) {
  return request({
    method: "post", //请求方法，get post
    url: "/register",
    data,
  });
}

export function login(data: UserLoginProps) {
  return request({
    method: "post", //请求方法，get post
    url: "/auth/login",
    data,
  });
}

export function getUserInfo(data: UserInfoProps) {
  return request({
    method: "get", //请求方法，get post
    url: "/user/info",
    data,
  });
}
