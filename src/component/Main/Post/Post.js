import React from "react";
import { Posts } from "./PostContainerStyle";
import { Container, Sumnail, Contents, Sides, HashTag } from "./PostStyle";
import StarCounter from "../StarCounter";
const Post = ({
  postData,
  setPostData,
  setPostVisible,
  isMypost,
  post_id,
  title,
  content,
  time,
  loaction,
  age_limit,
  person_num,
  writer,
  created_at,
}) => {
  return (
    <Container>
      <Sumnail src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" />
      <Contents
        onClick={() => {
          console.log(post_id);
          setPostVisible(true);
          setPostData(postData);
        }}
      >
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="info">
          <div className="time">
            <i className="fas fa-clock"></i>
            {time}
          </div>
          <div className="location">
            <i className="fas fa-map-marker-alt"></i>
            {loaction}
          </div>
          <div className="Personnel">
            <i className="fas fa-user-friends"></i>
            {person_num}명
          </div>
        </div>
        <div className="tags">
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
        </div>
        <p className="date">{created_at}</p>
      </Contents>
      <Sides isMypost={isMypost}>
        <div className="profile">
          <img src="https://s3.ap-northeast-2.amazonaws.com/st.dangidata/hobby_conects/data/adm/lecture_manage/curriculum/c38a83a05370cc5f142d2d0f0ae84059.png" />
          <p>'{writer}'님</p>
          <p>{StarCounter(2.5)}</p>
          <div className="gotoProfile">프로필 보기</div>
        </div>
        {isMypost ? <button>삭제하기</button> : <button>참여신청</button>}
      </Sides>
    </Container>
  );
};

export default Post;
