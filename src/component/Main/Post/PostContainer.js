import React, { useState, useEffect } from 'react';
import { Container, Posts, WriteButton } from './PostContainerStyle';
import Post from './Post';
import PostModal from './Modal/PostModal';
import { getRequest } from '../../../lib/api/api';
import EditModal from './Modal/EditModal';
import WriteModal from './Modal/WriteModal';
import ReportModal from './Modal/ReportModal';
const PostContainer = () => {
  const [writingVisible, setWritingVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [postList, setPostList] = useState([]);
  const [postId, setPostId] = useState();

  useEffect(() => {
    getRequest()
      .get('/post')
      .then(res => {
        setPostList(res.data);
      })
      .catch(alert);
  }, []);
  return (
    <Container>
      <WriteButton onClick={e => setWritingVisible(true)}>
        <i class="fas fa-feather-alt"></i>글쓰기
      </WriteButton>
      {reportVisible && <ReportModal setReportVisible={setReportVisible} />}
      {writingVisible && (
        <WriteModal setWritingVisible={setWritingVisible} postId={postId} />
      )}
      {editVisible && (
        <EditModal setEditVisible={setEditVisible} postId={postId} />
      )}

      <div className="header">최근 모집하는 모임</div>
      <Posts>
        {Array.prototype.map.call(postList, (e, i) => {
          return (
            <Post
              setEditVisible={setEditVisible}
              setReportVisible={setReportVisible}
              setPostId={setPostId}
              key={i}
              postId={e.postId}
              writerId={e.userId}
              writerScore={e.score}
              title={e.title}
              content={e.content}
              writer={e.writer}
              meetTime={e.meetTime}
              address={e.address}
              createdAt={e.createdAt}
              personnel={e.personnel}
              profile={e.profileImage}
              sumnail={e.postImage}
              isMyPost={e.isMine}
            />
          );
        })}
      </Posts>
    </Container>
  );
};

export default PostContainer;
