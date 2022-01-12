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
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import AuthService from "../services/auth.service";
import { lowerCase, startCase } from "lodash";

const { Title, Text, Link, Paragraph } = Typography;
const { Meta } = Card;

const arrayOfColors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [user, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [likeStatus, setLikeStatus] = useState(false);
  const [postModalVisible, setPostModal] = useState(false);
  const [postContent, setPostContent] = useState(null);

  const onChange = (e) => {
    setPostContent(e.target.value);
  };

  return (
    <div>
      Posts
      <CreatePost visible={postModalVisible} setPostModal={setPostModal} />
      <Card className="mv-10">
        <Avatar
          style={{
            backgroundColor:
              arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)],
          }}
        >
          K
        </Avatar>
        &nbsp; &nbsp;
        <Button type="default" shape="round" onClick={() => setPostModal(true)}>
          What's on your mind, {startCase(lowerCase(user.username))}?
        </Button>
      </Card>
      {SAMPLEDATA.map((post) => (
        <Post
          post={post}
          avatarColor={
            arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)]
          }
        />
      ))}
    </div>
  );
};

export default Posts;

const SAMPLEDATA = [
  {
    author: "kavin",
    content: "This is a post",
  },
  {
    author: "govind",
    content: "This is second post",
  },
];
