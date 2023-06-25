import axios from "axios"; //导入axios

//创建axios对象
const request = axios.create({
  baseURL: "http://47.109.94.67:3000/api", //接口基准路径
});

// 请求拦截器  1，可以在这里添加token

request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    // const { user } = store.state;

    // if (user && user.token) {
    //   config.headers.Authorization = `Bearer ${store.state.user.token}`;
    // }

    return config;
  },
  function (error) {
    // 对请求错误做些什么

    return Promise.reject(error);
  }
);

// 添加响应拦截器

request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。

    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。

    return Promise.reject(error);
  }
);

export default request;
