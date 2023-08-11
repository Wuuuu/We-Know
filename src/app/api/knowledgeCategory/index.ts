import request from "../request";

// 获取知识类别数据
export function getKnowledgeCategoryList() {
  return request({
    method: "get",
    url: "/knowledge-category/list",
  });
}

// 类别下所有集合列表
export function getCategoryList(categoryId: string) {
  return request({
    method: "get",
    url: `/knowledge-subCategory/${categoryId}`,
  });
}
