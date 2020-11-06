import React, { useState, useEffect } from 'react';
import { Container, Posts, WriteButton } from './PostContainerStyle';
import Post from './Post';
import PostModal from './Modal/PostModal';
import { getRequest } from '../../../lib/api/api';
import EditModal from './Modal/EditModal';
import WriteModal from './Modal/WriteModal';
const PostContainer = () => {
  const [postVisible, setPostVisible] = useState(false);
  const [writingVisible, setWritingVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [postData, setPostData] = useState('');

  useEffect(() => {
    console.log('list');
    getRequest()
      .get('/post')
      .then(res => {
        setPostData(res.data);
      })
      .catch(alert);
  }, []);

  return (
    <Container>
      <WriteButton onClick={e => setWritingVisible(true)}>
        <i class="fas fa-feather-alt"></i>글쓰기
      </WriteButton>
      {writingVisible && <WriteModal setWritingVisible={setWritingVisible} />}
      {editVisible && <EditModal setEditVisible={setEditVisible} />}
      {postVisible && <PostModal setPostVisible={setPostVisible} />}
      <div className="header">최근 모집하는 모임</div>
      <Posts>
        {Array.prototype.map.call(postData, (e, i) => (
          <Post
            setPostVisible={setPostVisible}
            setEditVisible={setEditVisible}
            key={i}
            title={e.title}
            content={e.content}
            meetTime={e.meetTime}
            address={e.address}
            ageLimit={e.ageLimit}
            writer={e.writer}
            createdAt={e.createdAt}
          />
        ))}
      </Posts>
    </Container>
  );
};

export default PostContainer;
