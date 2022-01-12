import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import {
  FileTextOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Profile from "./Profile";
import Posts from "./Posts";
import AuthService from "../services/auth.service";

const { Header, Content } = Layout;
const { Link } = Typography;

const Main = () => {
  return (
    <Router>
      <Layout>
        <Header className="layout-header">
          <div className="layout-header-logo pepul-logo-style">Pepul</div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["profile"]}
          >
            <Menu.Item key="profile" icon={<UserOutlined />}>
              <Link href="/app/profile">Profile</Link>
            </Menu.Item>
            {/*<Menu.Item key="posts" icon={<FileTextOutlined />}>
              <Link href="/app/posts">Posts</Link>
              </Menu.Item>*/}
            <Menu.Item
              key="logout"
              icon={<LogoutOutlined />}
              onClick={() => AuthService.logout()}
            >
              <Link href="#">Logout</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="layout-content">
          <Route path="/app/profile" exact component={Profile} />
          <Route path="/app/posts" exact component={Posts} />
        </Content>
      </Layout>
    </Router>
  );
};

export default Main;
