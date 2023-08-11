"use client";

import { Spin } from "antd";

const Loading = () => {
  return (
    <div className=" mt-9">
      <Spin
        tip="Loading"
        size="large"
      >
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Loading;
