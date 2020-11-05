import React, { useState } from 'react';
import { Container, Posts } from './PostContainerStyle';
import Post from './Post';
import PostModal from './Modal/PostModal';
import WriteModal from './Modal/WriteModal';
const dummy = [
  {
    post_id: 1,
    title: '볼링',
    content: 'asdasd',
    time: '2020-12-11',
    loaction: '대전',
    age_limit: true,
    person_num: 5,
    writer: '홍길동',
    created_at: '2020-10-20',
  },
  {
    post_id: 2,
    title: '볼링',
    content: 'asdasd',
    time: '2020-12-01',
    loaction: '대전',
    age_limit: true,
    person_num: 5,
    writer: '홍길동',
    created_at: '2020-10-20',
  },
];

const PostContainer = () => {
  const [postVisible, setPostVisible] = useState(false);
  const [postData, setPostData] = useState('');
  return (
    <Container>
      {/* <WriteModal /> <PostModal postData={dummy[0]} setPostVisible={setPostVisible} /> */}
      {postVisible && (
        <PostModal postData={postData} setPostVisible={setPostVisible} />
      )}
      <div className="header">최근 모집하는 모임</div>
      <Posts>
        {dummy.map((e, i) => {
          const {
            post_id,
            title,
            content,
            time,
            loaction,
            age_limit,
            person_num,
            writer,
            created_at,
          } = e;
          return (
            <Post
              postData={e}
              setPostData={setPostData}
              setPostVisible={setPostVisible}
              key={i}
              post_id={post_id}
              title={title}
              content={content}
              time={time}
              loaction={loaction}
              age_limit={age_limit}
              person_num={person_num}
              writer={writer}
              created_at={created_at}
            />
          );
        })}
      </Posts>
    </Container>
  );
};

export default PostContainer;
