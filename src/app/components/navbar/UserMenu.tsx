"use client";

import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Avatar, Button, Card, Dropdown, Space } from "antd";
import { useToggle } from "ahooks";
import { LuClipboardEdit, LuLogOut, LuSettings } from "react-icons/lu";
import { IconType } from "react-icons";
import { SafeUser } from "@/app/types";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const IconLabel = ({ text, icon: Icon }: { text: string; icon: IconType }) => {
  return (
    <div className="flex items-center py-1 text-gray-500">
      <Icon size={20} />
      <span className="block ml-8">{text}</span>
    </div>
  );
};

const UserInfoCard = () => {
  return (
    <Card style={{ width: "100%", marginTop: 7, padding: 0 }}>
      <Card.Meta
        avatar={
          <Avatar
            className="border-1 border-gray-200"
            size={64}
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
          />
        }
        title="Greg Wu"
        description="greg5wu@gmail.com"
      />
    </Card>
  );
};

const items: MenuProps["items"] = [
  {
    label: <UserInfoCard />,
    key: "0",
  },
  {
    label: (
      <IconLabel
        icon={LuClipboardEdit}
        text="编辑用户"
      />
    ),
    key: "2",
  },

  {
    label: (
      <IconLabel
        icon={LuSettings}
        text="设置"
      />
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: (
      <IconLabel
        icon={LuLogOut}
        text="退出用户"
      />
    ),
    key: "3",
  },
];

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [loginModalState, { toggle: loginModaltoggle, setLeft: setLoginLeft }] = useToggle();
  const [registerModalState, { toggle: registerModaltoggle, setLeft: setRegisterLeft }] =
    useToggle();

  if (!currentUser) {
    return (
      <>
        <div className="w-[160px] flex justify-around">
          <Button
            type="dashed"
            onClick={loginModaltoggle}
          >
            登录
          </Button>
          <Button
            type="ghost"
            onClick={registerModaltoggle}
          >
            注册
          </Button>
        </div>
        <LoginModal
          onRegisterModalToggle={registerModaltoggle}
          visible={loginModalState}
          onCancel={setLoginLeft}
        />
        <RegisterModal
          onLoginModalToggle={loginModaltoggle}
          visible={registerModalState}
          onCancel={setRegisterLeft}
        />
      </>
    );
  }

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayStyle={{ width: 340 }}
    >
      <Space>
        <Avatar
          size="large"
          className="bg-orange-400 align-middle cursor-pointer"
        >
          Wuuuu
        </Avatar>
      </Space>
    </Dropdown>
  );
};

export default UserMenu;
