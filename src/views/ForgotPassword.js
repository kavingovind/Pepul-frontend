import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Typography,
  Divider,
  message,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import AuthService from "../services/auth.service";

const { Title, Text, Paragraph, Link } = Typography;

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const ForgotPassword = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    AuthService.login(values.username, values.password).then(
      () => {
        history.push("/app/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        message.error(resMessage);
      }
    );
    setLoading(false);
  };

  return (
    <div>
      <Row className="home-container" gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={10} lg={12}>
          <div className="pepul-logo pepul-logo-style">Pepul</div>
          <Title level={4}>
            Pepul helps you connect and share your stories
            <br /> with the people in your life.
          </Title>
        </Col>
        <Col xs={24} sm={24} md={10} lg={8}>
          <Form
            name="forgotPassword"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input size="large" placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input size="large" type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                type="primary"
                shape="round"
                block
                htmlType="submit"
                loading={loading}
              >
                Request Password Reset
              </Button>
              <Divider />
              <Paragraph>
                Rememder Password?{" "}
                <Link className="text-center" href="/login">
                  Login Now!
                </Link>
              </Paragraph>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPassword;
