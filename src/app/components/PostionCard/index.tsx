"use client";

import Container from "../Container";

import PostionCardItem from "./PostionCardItem";
import { usePathname, useSearchParams } from "next/navigation";
import { Row, Col } from "antd";

enum IconType {
  "FE" = "fe",
  "BE" = "be",
  "TEST" = "test",
}

export const categories = [
  {
    text: "前 端",
    label: "FE",
    icon: IconType.FE,
    description: "This property is close to the beach!",
  },
  {
    text: "后 端",
    label: "BE",
    icon: IconType.BE,
    description: "This property is has windmills!",
  },
  {
    text: "测 试",
    label: "TEST",
    icon: IconType.TEST,
    description: "This property is modern!",
  },
];

const Categories = () => {
  // const params = useSearchParams();
  // const category = params?.get("position");
  // const pathname = usePathname();
  // const isIndexPage = pathname === "/";

  // const { data, error, loading } = useRequest(getKnowledgeList);

  // if (!isIndexPage) {
  //   return null;
  // }

  // const categories = data?.data || [];
  return (
    <div className="mt-7 p-8 bg-white border-solid border-2 rounded-3xl border-[#08394A]">
      <h3 className="w-[240px] h-[56px] px-9 mx-auto mb-8 leading-[56px] text-center border-solid border-b-2 border-[#08394A]">
        请先选择知识类别：
      </h3>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="space-evenly"
      >
        {categories.map((item) => (
          <Col
            // className="gutter-row"
            span={6}
            key={item.label}
          >
            <PostionCardItem
              label={item.label}
              text={item.text}
              // selected={category === item.label}
              icon={item.icon}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categories;
{
  /* <div className="flex flex-row items-center justify-center overflow-x-auto">
        {categories.map((item) => (
          <CategoriesBox
            key={item.label}
            label={item.label}
            text={item.text}
            selected={category === item.label}
            icon={item.icon}
          />
        ))}
      </div> */
}
