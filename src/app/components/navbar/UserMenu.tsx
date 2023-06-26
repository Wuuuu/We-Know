"use client";

import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Avatar, Button, Card, Dropdown, Space } from "antd";
import { useToggle } from "ahooks";
import { LuClipboardEdit, LuLogOut, LuSettings } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";
import { IconType } from "react-icons";
import { SafeUser } from "@/app/types";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

type UserInfoProps = Pick<SafeUser, "image" | "name" | "email">;

const IconLabel = ({ text, icon: Icon }: { text: string; icon: IconType }) => {
  return (
    <div className="flex items-center py-1 text-gray-500">
      <Icon size={20} />
      <span className="block ml-8">{text}</span>
    </div>
  );
};

const UserInfoCard = ({ image, name, email }: UserInfoProps) => {
  return (
    <Card style={{ width: "100%", marginTop: 7, padding: 0 }}>
      <Card.Meta
        avatar={
          <Avatar
            className="flex items-center justify-center border-1 border-gray-200"
            size={64}
            src={image}
            icon={<BiUserCircle size={48} />}
          />
        }
        title={name}
        description={email}
      />
    </Card>
  );
};

const onClick: MenuProps["onClick"] = ({ key }) => {
  // const menuActionTypes = {
  //   "3": () => signOut(),
  // };
  if (key === "3") {
    signOut();
  }
  // menuActionTypes[key]();
};

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

  const { image, name, email } = currentUser;
  const items: MenuProps["items"] = [
    {
      label: (
        <UserInfoCard
          image={image}
          name={name}
          email={email}
        />
      ),
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

  return (
    <Dropdown
      menu={{ items, onClick }}
      trigger={["click"]}
      overlayStyle={{ width: 340 }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Avatar
            size="large"
            src={image}
            className="align-middle cursor-pointer"
            icon={<BiUserCircle size={38} />}
          />
        </Space>
      </a>
    </Dropdown>
  );
};

export default UserMenu;
