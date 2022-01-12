import React, { useState } from "react";
import {
    Avatar,
    Button,
    Card,
    Col,
    Form,
    Input,
    message,
    Modal,
    Row,
    Skeleton,
    Typography,
} from "antd";
import {
    HeartOutlined,
    HeartTwoTone,
    InfoCircleOutlined,
    SettingFilled,
} from "@ant-design/icons";
import CreatePost from "./CreatePost";

const { Title, Text, Link, Paragraph } = Typography;
const { Meta } = Card;

const Post = ({ post, avatarColor }) => {
    const [loading, setLoading] = useState(false);
    const [likeStatus, setLikeStatus] = useState(false);

    return (
        <div>
            <Card className="mv-10" hoverable>
                <Skeleton loading={loading} avatar active>
                    <Meta
                        avatar={
                            <Avatar style={{ backgroundColor: avatarColor }}>
                                {post.author.charAt(0).toUpperCase()}
                            </Avatar>
                        }
                        title={post.author}
                        description={post.content}
                    />
                    <div>
                        <Row
                            className="mt-20"
                            gutter={[16, 16]}
                            align="middle"
                            justify="end"
                        >
                            <Col span={10} offset={0}>
                                {likeStatus ? (
                                    <HeartTwoTone
                                        style={{ fontSize: 20 }}
                                        twoToneColor="#eb2f96"
                                        onClick={() => setLikeStatus(false)}
                                    />
                                ) : (
                                    <HeartOutlined
                                        style={{ fontSize: 20 }}
                                        onClick={() => setLikeStatus(true)}
                                    />
                                )}
                            </Col>
                            <Col span={10} offset={0}>
                                <InfoCircleOutlined style={{ fontSize: 20 }} />
                            </Col>
                        </Row>
                    </div>
                </Skeleton>
            </Card>
        </div>
    );
};

export default Post;
