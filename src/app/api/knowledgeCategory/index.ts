import request from "../request";

export function getKnowledgeList() {
  return request({
    method: "get",
    url: "/knowledge-category/list",
  });
}
