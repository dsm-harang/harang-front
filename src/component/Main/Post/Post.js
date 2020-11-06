import React from 'react';
import {
  Container,
  Sumnail,
  Contents,
  Sides,
  HashTag,
  Button,
} from './PostStyle';
import StarCounter from '../StarCounter';
const Post = ({
  setPostVisible,
  setEditVisible,
  title,
  content,
  meetTime,
  address,
  writer,
  createdAt,
}) => {
  return (
    <Container>
      <Sumnail src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" />
      <Contents
        onClick={() => {
          setPostVisible(true);
        }}
      >
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="info">
          <div className="time">
            <i className="fas fa-clock"></i>
            {meetTime}
          </div>
          <div className="location">
            <i className="fas fa-map-marker-alt"></i>
            {address}
          </div>
          <div className="Personnel">
            <i className="fas fa-user-friends"></i>
            {}명
          </div>
        </div>
        <div className="tags">
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
        </div>
        <p className="date">{createdAt}</p>
      </Contents>
      <Sides>
        <div className="profile">
          <img src="https://s3.ap-northeast-2.amazonaws.com/st.dangidata/hobby_conects/data/adm/lecture_manage/curriculum/c38a83a05370cc5f142d2d0f0ae84059.png" />
          <p>'{writer}'님</p>
          <p>{StarCounter(2.5)}</p>
          <div className="gotoProfile">프로필 보기</div>
        </div>
        {true ? (
          <>
            <Button
              color="#a48fe0"
              isMypost={true}
              onClick={e => setEditVisible(true)}
            >
              수정하기
            </Button>
            <Button color="#DB1313" isMypost={true}>
              삭제하기
            </Button>
          </>
        ) : (
          <Button color="#a48fe0">참여신청</Button>
        )}
      </Sides>
    </Container>
  );
};

export default Post;
