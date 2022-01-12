import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  Col,
  Descriptions,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { startCase, toLower } from "lodash";
import AuthService from "../services/auth.service";

const { Title, Text, Paragraph, Link } = Typography;

const Profile = () => {
  const [user, setUser] = useState(AuthService.getCurrentUser());
  const [loading, setLoading] = useState(false);
  console.log(AuthService.getCurrentUser());

  const onFinish = () => {};

  return (
    <div>
      <Row>
        <Avatar
          className="mb-20"
          size={64}
          style={{ backgroundColor: "#87d068" }}
          icon={<UserOutlined />}
        />
        <Descriptions title={startCase(toLower(user.username)) + "'s Profile"}>
          <Descriptions.Item label="Username">
            {user.username}
          </Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        </Descriptions>
      </Row>
      {/* <Row align="middle" justify="center">
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ username: user.username, email: user.email }}
        >
          <Form.Item name="username" help="Username cannot be changed">
            <Input size="large" disabled={true} />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email.",
              },
            ]}
          >
            <Input size="large" placeholder="Email" />
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              type="default"
              shape="round"
              block
              htmlType="submit"
              loading={loading}
            >
              Save Profile
            </Button>
          </Form.Item>
        </Form>
      </Row> */}
    </div>
  );
};

export default Profile;
