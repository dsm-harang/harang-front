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
  console.log(postId);
  const dummy = [
    {
      post_id: 1,
      title: '볼링11111111111111111111111111111',
      content: '볼링칠사람11111111111111111111111111111111111111',
      writer: '홍길동111111111111111111111',
      meetTime: '111111111111111111111111111111111',
      address: '볼링장111111111111111111111111111',
      ageLimit: 2011111111111111111111111111111111,
      createdAt: '2020 - 10 - 20',
      isMyPost: true,
    },
    {
      post_id: 2,
      title: '볼링',
      content: '볼링칠사람',
      writer: '홍길동',
      meetTime: '',
      address: '볼링장',
      ageLimit: 20,
      createdAt: '2020 - 10 - 20',
      isMyPost: false,
    },
  ];

  useEffect(() => {
    getRequest()
      .get('/post')
      .then(res => {
        setPostList(res.data);
      })
      .catch(alert);
  }, []);
  const a = () => console.log('a');
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
