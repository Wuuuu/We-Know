import request from "../request";

export type CategoryListProps = {
  currentPage: number;
  pageSize: number;
};

export function getCategoryList(data: CategoryListProps) {
  return request({
    method: "post", //请求方法，get post
    url: "/knowledge-category/list",
    data,
  });
}

export function getUserInfo() {
  return request({
    method: "get", //请求方法，get post
    url: "/user/info",
    // data,
  });
}
