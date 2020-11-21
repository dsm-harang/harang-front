import React, { useState } from 'react';
import {
  Container,
  Sumnail,
  Contents,
  Sides,
  HashTag,
  Button,
  ReportButton,
} from './PostStyle';
import StarCounter from '../StarCounter';
import { getRequest } from '../../../lib/api/api';
import { useHistory } from 'react-router';
import PostModal from './Modal/PostModal';
const Post = ({
  setEditVisible,
  setReportVisible,
  setPostId,
  postId,
  writerId,
  writerScore,
  title,
  content,
  writer,
  meetTime,
  address,
  createdAt,
  personnel,
  profile,
  sumnail,
  isMyPost,
}) => {
  const [postVisible, setPostVisible] = useState(false);
  const history = useHistory();

  const applicationSubmit = () => {
    getRequest().post(`post/${postId}`);
  };
  const deletePost = () => {
    getRequest().delete(`/post/${postId}`);
  };
  const gotoProfile = () => {
    history.push({ pathname: `/mypage/${writerId}` });
  };
  console.log('postId : ' + postId);
  return (
    <Container>
      {postVisible && (
        <PostModal setPostVisible={setPostVisible} postId={postId} />
      )}
      <Sumnail src={sumnail} />
      <Contents>
        <div
          className="title"
          onClick={() => {
            setPostVisible(true);
            setPostId(postId);
          }}
        >
          {title}
        </div>
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
            {personnel}명
          </div>
        </div>
        <div className="tags">
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
          <HashTag>#tag</HashTag>
        </div>
        <ReportButton
          onClick={e => {
            setReportVisible(true);
            setPostId(postId);
          }}
        >
          <i
            class="fas fa-exclamation-triangle"
            style={{ fontSize: '10px', marginRight: '5px' }}
          ></i>
          신고하기
        </ReportButton>
        <p className="date">{createdAt}에 올라온 글입니다</p>
      </Contents>
      <Sides>
        <div className="profile">
          <img src={profile} />
          <p className="writer">'{writer}'님</p>
          <p>{StarCounter(2.5)}</p>
          <div className="gotoProfile" onClick={gotoProfile}>
            프로필 보기
          </div>
        </div>
        {isMyPost ? (
          <div onClick={e => setPostId(postId)}>
            <Button
              color="#a48fe0"
              isMypost={true}
              onClick={e => {
                setEditVisible(true);
              }}
            >
              수정하기
            </Button>
            <Button color="#DB1313" isMypost={true} onClick={deletePost}>
              삭제하기
            </Button>
          </div>
        ) : (
          <div onClick={e => setPostId(postId)}>
            <Button color="#a48fe0" onClick={applicationSubmit}>
              참여신청
            </Button>
          </div>
        )}
      </Sides>
    </Container>
  );
};

export default Post;
