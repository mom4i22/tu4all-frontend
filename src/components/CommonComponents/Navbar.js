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
    getItem(t("nav_student_help"), "sub1", <RobotOutlined />, [
      getItem("Option 5", "6"),
      getItem("Option 6", "7"),
      getItem("Option 7", "8"),
      getItem("Option 8", "9"),
    ]),
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

    //  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    //    getItem('Option 9', '9'),
    //    getItem('Option 10', '10'),
    //    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    //  ]),
  ];
  return (
    <>
      <Menu
        defaultSelectedKeys={["1"]}
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
