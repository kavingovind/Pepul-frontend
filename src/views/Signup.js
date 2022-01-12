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
import { HeartFilled } from "@ant-design/icons";
import AuthService from "../services/auth.service";

const { Title, Text, Paragraph, Link } = Typography;

const Signup = () => {
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    AuthService.register(values.username, values.email, values.password).then(
      (response) => {
        /*this.setState({
          message: response.data.message,
          successful: true,
        });*/
        message.success(response.data.message);
        history.push("/login");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        message.error(resMessage);
        console.log(resMessage);
        /*this.setState({
          successful: false,
          message: resMessage,
        });*/
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
          <Form name="login" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username.",
                },
              ]}
            >
              <Input size="large" placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email.",
                },
              ]}
            >
              <Input size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password.",
                },
              ]}
            >
              <Input size="large" type="password" placeholder="Password" />
            </Form.Item>
            <Paragraph>
              By Signing up, you agree to our{" "}
              <Link href="#">Terms and Conditions</Link>
            </Paragraph>
            <Form.Item>
              <Button
                size="large"
                type="primary"
                shape="round"
                block
                htmlType="submit"
                loading={loading}
              >
                Sign up
              </Button>
              <Divider>Or</Divider>
              <Paragraph>
                Already have an account? <Link href="/login">Login Now!</Link>
              </Paragraph>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row align="middle" justify="center">
        <Col>
          <Title className="font-medium" level={5}>
            Made with <HeartFilled style={{ color: "#eb2f96" }} /> by{" "}
            <Link href="https://github.com/kavingovind">kavingovind</Link>
          </Title>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
