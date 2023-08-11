"use client";

import CategoryItem from "./Item";
import { Row, Col, Card } from "antd";
import { useRequest } from "ahooks";
import { getKnowledgeCategoryList } from "@/app/api/knowledgeCategory";
import { useEffect } from "react";

const KnowledgeCategories = () => {
  const { data, run, loading } = useRequest(getKnowledgeCategoryList, {
    manual: true,
    cacheKey: "getKnowledgeCategoryList",
  });

  useEffect(() => {
    run();
  }, [run]);

  const categories = data || [];

  return (
    <div className="mt-7 p-8 bg-white border-solid border-2 rounded-3xl border-[#08394A]">
      <h3 className="w-[340px] h-[56px] px-1 mx-auto mb-8 text-[#50B964] leading-[56px] text-center font-bold text-2xl border-solid border-b-2 border-[#08394A]">
        请先选择知识类别：
      </h3>

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-evenly"
      >
        {loading && !data && (
          <Card
            style={{ width: 300, marginTop: 16 }}
            loading={loading}
          ></Card>
        )}
        {categories?.map((item: any) => (
          <Col
            // className="gutter-row"
            span={6}
            key={item._id}
          >
            <CategoryItem
              id={item._id}
              label={item.collectionType}
              text={item.collectionName}
              // selected={category === item.label}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default KnowledgeCategories;
