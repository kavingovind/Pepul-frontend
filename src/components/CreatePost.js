import React, { useState } from "react";
import {
    Avatar,
    Button,
    Card,
    Form,
    Input,
    message,
    Modal,
    Typography,
} from "antd";
import { SendOutlined } from "@ant-design/icons";

const { Title, Text, Link, Paragraph } = Typography;

const CreatePost = ({ visible, setPostModal }) => {
    const [loading, setLoading] = useState(false);
    const [postContent, setPostContent] = useState(null);

    const onChange = (e) => {
        setPostContent(e.target.value);
    };

    const onFinish = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            message.info(postContent);
            setPostModal();
        }, 2000);
    };

    return (
        <div>
            <Modal
                title={<Title level={5}>Create Post</Title>}
                visible={visible}
                footer={null}
                onCancel={() => setPostModal(false)}
            >
                <Form name="newPost" onFinish={onFinish}>
                    <Form.Item name="post">
                        <Input.TextArea
                            bordered={false}
                            maxLength={3000}
                            rows={5}
                            onChange={onChange}
                            placeholder="Write something.."
                        />
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
                            Post now <SendOutlined />
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CreatePost;
