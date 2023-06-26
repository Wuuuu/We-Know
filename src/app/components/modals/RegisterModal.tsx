"use client";

import { useState } from "react";

import axios from "axios";
import { UserRegisterProps, register } from "@/app/api/user";
import { Button, Form, Input, Modal, Divider, message } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { NoticeType } from "antd/es/message/interface";
import Heading from "../Heading";

import styles from "./index.module.scss";

type RegisterModalProps = {
  visible: boolean;
  onCancel: () => void;
  onOk?: () => void;
  onLoginModalToggle?: () => void;
};

const RegisterModal: React.FC<RegisterModalProps> = ({
  visible,
  onCancel,
  onOk,
  onLoginModalToggle,
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [loading, setLoading] = useState(false);

  const onToggle = () => {
    onCancel();
    onLoginModalToggle?.();
  };

  const showMessage = (type: NoticeType, content: string) => {
    messageApi.open({
      type,
      content,
    });
  };

  const onFinish = (values: UserRegisterProps) => {
    setLoading(true);

    console.log("Success:", values);

    axios
      .post("/api/register", values)
      .then(() => {
        showMessage("success", "注册成功!");
        onToggle();
      })
      .catch((error) => {
        showMessage("error", error);
      })
      .finally(() => {
        setLoading(false);
      });

    // register(values)
    //   .then(() => {
    //     showMessage("success", "注册成功!");
    //     onToggle();
    //   })
    //   .catch((error) => {
    //     showMessage("error", error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <>
      {contextHolder}
      <Modal
        className={styles["register-modal-wrapper"]}
        width={680}
        title="注册"
        open={visible}
        onCancel={onCancel}
        footer={null}
      >
        <div>
          <Heading
            center
            title="欢迎使用 We Know"
            subtitle="账号注册"
          />
          <Form
            className="mt-4"
            name="register_modal_form"
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
              label="邮箱："
              name="email"
              rules={[
                { required: true, message: "请输入邮箱!" },
                {
                  type: "email",
                  message: "请输入合法的邮箱地址",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              className={styles.formItemWrapper}
              label="密码："
              name="password"
              rules={[{ required: true, message: "请输入密码!" }]}
            >
              <Input.Password size="large" />
            </Form.Item>
            <Form.Item>
              <Button
                loading={loading}
                className="mt-6"
                size="large"
                type="primary"
                block
                htmlType="submit"
              >
                注册
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
              已经有账号了?
              <span
                onClick={onToggle}
                className="text-neutral-800 cursor-pointer hover:underline"
              >
                {"  "}
                登录
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RegisterModal;
