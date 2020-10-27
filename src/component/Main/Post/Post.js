import React from "react";
import { Posts } from "./PostContainerStyle";
import { Container, Sumnail, Contents, Sides, HashTag } from "./PostStyle";
const Post = () => {
  return (
    <Container>
      <Sumnail src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" />
      <Contents>
        <div className="title">Title</div>
        <div className="content">Contents</div>
        <div className="info">
          <div className="time">
            <i className="fas fa-clock"></i>
            time
          </div>
          <div className="location">
            <i class="fas fa-map-marker-alt"></i>
            location
          </div>
          <div className="Personnel">
            <i class="fas fa-user-friends"></i>n명
          </div>
        </div>
        <div className="tags">
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
        </div>
      </Contents>
      <Sides>
        <div className="profile"></div>
        <button></button>
      </Sides>
    </Container>
  );
};

export default Post;
