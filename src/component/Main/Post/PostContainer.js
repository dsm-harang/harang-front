import React, { useState, useEffect } from 'react';
import { Container, Posts, WriteButton } from './PostContainerStyle';
import Post from './Post';
import PostModal from './Modal/PostModal';
import { getRequest } from '../../../lib/api/api';
import EditModal from './Modal/EditModal';
import WriteModal from './Modal/WriteModal';
import ReportModal from './Modal/ReportModal';
const PostContainer = ({ myData }) => {
  const [postVisible, setPostVisible] = useState(false);
  const [writingVisible, setWritingVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [postList, setPostList] = useState();
  const [postId, setPostId] = useState();
  const dummy = [];

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
      {postVisible && (
        <PostModal setPostVisible={setPostVisible} postId={postId} />
      )}
      <div className="header">최근 모집하는 모임</div>
      <Posts>
        {Array.prototype.map.call(dummy, (e, i) => {
          return (
            <Post
              setPostVisible={setPostVisible}
              setEditVisible={setEditVisible}
              setReportVisible={setReportVisible}
              postId={e.post_id}
              key={i}
              title={e.title}
              content={e.content}
              meetTime={e.meetTime}
              address={e.address}
              ageLimit={e.ageLimit}
              writer={e.writer}
              createdAt={e.createdAt}
              personnel={e.personnel}
              imageName={e.imageName}
              setPostId={setPostId}
              isMyPost={e.isMyPost}
            />
          );
        })}
      </Posts>
    </Container>
  );
};

export default PostContainer;
