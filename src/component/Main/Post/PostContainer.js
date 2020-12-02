import React, { useState, useEffect } from 'react';
import { Container, Posts, WriteButton } from './PostContainerStyle';
import Post from './Post';
import { getRequest } from '../../../lib/api/api';
import WriteModal from './Modal/WriteModal';
import ReportModal from './Modal/ReportModal';
const PostContainer = () => {
  const [writingVisible, setWritingVisible] = useState(false);
  const [reportVisible, setReportVisible] = useState(false);
  const [postList, setPostList] = useState([]);
  const [postId, setPostId] = useState();

  useEffect(() => {
    getRequest()
      .get('/post')
      .then(res => {
        setPostList(res.data.reverse());
      })
      .catch(alert);
  }, []);

  return (
    <Container>
      <WriteButton onClick={e => setWritingVisible(true)}>
        <i class="fas fa-feather-alt"></i>글쓰기
      </WriteButton>
      {reportVisible && (
        <ReportModal setReportVisible={setReportVisible} postId={postId} />
      )}
      {writingVisible && (
        <WriteModal setWritingVisible={setWritingVisible} postId={postId} />
      )}

      <div className="header">최근 모집하는 모임</div>
      <Posts>
        {Array.prototype.map.call(postList, (e, i) => {
          const tags = e.tag.split('#');
          tags.shift();
          return (
            <Post
              setReportVisible={setReportVisible}
              setPostId={setPostId}
              key={i}
              data={e}
              isMyPost={e.mine}
              tag={tags}
              delay={i}
            />
          );
        })}
      </Posts>
    </Container>
  );
};

export default PostContainer;
