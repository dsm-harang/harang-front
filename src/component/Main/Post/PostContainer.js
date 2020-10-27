import React from "react";
import { Container, Posts } from "./PostContainerStyle";
import Post from "./Post";
const PostContainer = () => {
  return (
    <Container>
      <div className="header">최근 모집하는 모임</div>
      <Posts>
        <Post />
        <Post />
        <Post />
        <Post />
      </Posts>
    </Container>
  );
};

export default PostContainer;
