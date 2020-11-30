import React, { useState, useEffect } from 'react';
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
import { getRequest, SERVER_URL } from '../../../lib/api/api';
import { useHistory } from 'react-router';
import PostModal from './Modal/PostModal';
import EditModal from './Modal/EditModal';
const Post = ({ setReportVisible, setPostId, data, isMyPost, tag, delay }) => {
  const [postVisible, setPostVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const history = useHistory();

  const applicationSubmit = () => {
    getRequest()
      .post(`post/${data.postId}`)
      .then(alert('참여신청이 완료되었습니다'));
  };
  const deletePost = () => {
    getRequest()
      .delete(`/post/${data.postId}`)
      .then(alert('삭제되었습니다'))
      .catch(alert);
  };
  const gotoProfile = () => {
    history.push({ pathname: `/mypage/${data.writerId}` });
  };

  const dateParse = () => {
    const dateData = data.meetTime.split('T');
    const date = dateData[0];
    const timeData = dateData[1].split(':');
    const hour = parseInt(timeData[0]) > 12 ? '오후' : '오전';

    return `${date} ${hour} ${parseInt(timeData[0]) % 12}시 ${
      parseInt(timeData[1]) > 0 ? timeData[1] + '분' : ''
    }`;
  };

  return (
    <Container delay={delay}>
      {postVisible && (
        <PostModal setPostVisible={setPostVisible} postId={data.postId} />
      )}
      {editVisible && (
        <EditModal setEditVisible={setEditVisible} postId={data.postId} />
      )}
      <Sumnail src={`${SERVER_URL}image/${data.postImage}`} />
      <Contents>
        <div
          className="title"
          onClick={() => {
            setPostVisible(true);
          }}
        >
          {data.title}
        </div>
        <div className="content">{data.content}</div>
        <div className="info">
          <div className="time">
            <i className="fas fa-clock"></i>
            {dateParse()}
          </div>
          <div className="location">
            <i className="fas fa-map-marker-alt"></i>
            {data.address}
          </div>
          <div className="Personnel">
            <i className="fas fa-user-friends"></i>
            {data.personnel}명
          </div>
        </div>
        <div className="tags">
          {tag && tag.map((e, i) => <HashTag key={i}>#{e}</HashTag>)}
        </div>

        <ReportButton
          onClick={e => {
            setReportVisible(true);
            setPostId(data.postId);
          }}
        >
          <i
            class="fas fa-exclamation-triangle"
            style={{ fontSize: '10px', marginRight: '5px' }}
          ></i>
          신고하기
        </ReportButton>
        <p className="date">{data.createdAt}에 올라온 글입니다</p>
      </Contents>
      <Sides>
        <div className="profile">
          <img src={`${SERVER_URL}image/${data.profileImage}`} />
          <p className="writer">'{data.writer}'님</p>
          <p>{StarCounter(2.5)}</p>
          <div className="gotoProfile" onClick={gotoProfile}>
            프로필 보기
          </div>
        </div>
        {isMyPost ? (
          <div onClick={e => setPostId(data.postId)}>
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
          <div onClick={e => setPostId(data.postId)}>
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
