import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Spin } from "antd";
import { useState, useEffect } from "react";
import Navbar from "@components/CommonComponents/Navbar.js";
import Chat from "@components/CommonComponents/Chat.js";
import UserNotifications from "@components/CommonComponents/UserNotifications.js";
import "@styles/welcome.css";
import { useTranslation } from "react-i18next";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const PageLayout = (props) => {
  const { t } = useTranslation();

  const Inner = props.inner;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="bg-customBlue shadow"
      >
        <div className="demo-logo-vertical" />
        <Navbar />
      </Sider>
      <Layout className="flex flex-col">
        <Header className="bg-transparent">
          <UserNotifications />
        </Header>
        <Content className="flex-1 p-4">
          <div className="flex flex-col md:flex-row">
            {loading ? (
              <Spin className="m-auto w-1/2" size="large" />
            ) : (
              <>
                {Inner.name == "FeedPosts" ? (
                  <Inner canEdit={props.canEdit} />
                ) : (
                  <Inner />
                )}
                <Chat />
              </>
            )}
          </div>
        </Content>
        <Footer className="text-center">
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
