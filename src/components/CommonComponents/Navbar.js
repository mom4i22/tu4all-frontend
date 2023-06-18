import {
  HomeOutlined,
  ContainerOutlined,
  TeamOutlined,
  UserOutlined,
  RobotOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { clearStorage } from "@services/auth";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const items = [
    getItem(<Link to={"/feed"}>{t("nav_feed")}</Link>, "1", <HomeOutlined />),

    getItem(
      <Link to={"/friends"}>{t("nav_friends")}</Link>,
      "2",
      <TeamOutlined />
    ),

    getItem(
      <Link to={"/profile"}>{t("nav_profile")}</Link>,
      "3",
      <UserOutlined />
    ),
    getItem(
      <Link to={"/posts"}>{t("nav_posts")}</Link>,
      "4",
      <ContainerOutlined />
    ),
    getItem(
      <Link to={"/learning"}>{t("nav_student_help")}</Link>,
      "5",
      <RobotOutlined />
    ),
    getItem(
      <Link to={"/faq"}>{t("nav_faq")}</Link>,
      "10",
      <QuestionCircleOutlined />
    ),

    getItem(
      <Link
        to={"/"}
        onClick={() => {
          clearStorage();
        }}
      >
        {t("nav_logout")}
      </Link>,
      "11",
      <LogoutOutlined />
    ),
  ];
  return (
    <>
      <Menu
        mode="inline"
        theme="dark"
        className="bg-customBlue"
        collapsed={collapsed.toString()}
        items={items}
      />
    </>
  );
};
export default Navbar;
