"use client";

import { useState } from "react";

import { Button, Form, Input, Modal, Divider } from "antd";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Heading from "../Heading";

import styles from "./index.module.scss";

type LoginModalProps = {
  visible: boolean;
  onCancel: () => void;
  onOk?: () => void;
  onRegisterModalToggle?: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  visible,
  onCancel,
  onOk,
  onRegisterModalToggle,
}) => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: Record<string, any>) => {
    setLoading(true);

    signIn("credentials", {
      ...values,
      redirect: false,
    }).then((callback) => {
      setLoading(false);
      console.log(callback);
    });

    console.log("Success:", values);
    onOk?.();
  };

  const onToggle = () => {
    onCancel();
    onRegisterModalToggle?.();
  };

  return (
    <Modal
      className={styles["login-modal-wrapper"]}
      width={680}
      title="登录"
      open={visible}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
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
        >
          <Form.Item
            label="用户名："
            name="username"
            rules={[{ required: true, message: "请输入用户名!" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            label="密码："
            name="password"
            rules={[{ required: true, message: "请输入密码!" }]}
          >
            <Input.Password size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              block
              className="mt-6"
              size="large"
              type="primary"
              loading={loading}
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
          onClick={() => signIn("google")}
        >
          Google
        </Button>
        <Button
          className="mt-4 flex items-center justify-center"
          icon={<BsGithub />}
          block
          size="large"
          onClick={() => signIn("github")}
        >
          Github
        </Button>
        <div className="text-neutral-500 text-center mt-4 font-light">
          <p className="mb-0 mt-4">
            第一次使用We Know?
            <span
              onClick={onToggle}
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
