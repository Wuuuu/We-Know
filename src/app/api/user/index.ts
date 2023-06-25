import request from "../request";

type UserRegisterProps = {
  username: string;
  password: string;
};
export function register(data: UserRegisterProps) {
  return request({
    method: "post", //请求方法，get post
    url: "/user/register",
    data,
  });
}
