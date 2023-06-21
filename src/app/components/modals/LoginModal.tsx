import React, { useState } from "react";
import { Button, Form, Input, Modal, Divider } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Heading from "../Heading";

type LoginModalProps = {
  visible: boolean;
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const LoginModal: React.FC<LoginModalProps> = ({ visible }) => {
  console.log(visible);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      width={680}
      title="登录"
      open={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div>
        <Heading
          center
          title="欢迎来到 We Know"
          subtitle="账号登录"
        />
        <Form
          className="mt-4"
          name="login_modal_form"
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              className="mt-6"
              size="large"
              type="primary"
              block
              htmlType="submit"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <Button
          className="flex items-center justify-center"
          icon={<FcGoogle />}
          block
          size="large"
        >
          Google
        </Button>
        <Button
          className="mt-4 flex items-center justify-center"
          icon={<BsGithub />}
          block
          size="large"
        >
          Github
        </Button>
        <div className="text-neutral-500 text-center mt-4 font-light">
          <p className="mb-0 mt-4">
            第一次使用We Know?
            <span
              // onClick={onToggle}
              className="text-neutral-800 cursor-pointer hover:underline"
            >
              {"  "}
              创建账号
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
