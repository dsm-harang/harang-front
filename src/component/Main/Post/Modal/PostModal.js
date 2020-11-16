import React, { useEffect, useState } from 'react';
import { getRequest } from '../../../../lib/api/api';
import {
  Overlay,
  PostModalContainer,
  PostInfo,
  Contents,
  Sumnail,
  Global,
} from './ModalStyle';

const PostModal = ({ setPostVisible, postId }) => {
  const reader = new FileReader();
  const [postData, setPostData] = useState({
    title: 'TITLE',
    content: 'content',
    meetTime: '2020-01-19',
    address: '대덕소프트웨어 마이스터 고등학교',
    personnel: 3,
  });
  const [sumnail, setSumnail] = useState();

  useEffect(() => {
    getRequest()
      .get(`/post/${postId}`)
      .then(res => setPostData(res.data));
  }, []);

  // const readImg = () => {
  //   reader.readAsDataURL(postData.image);
  //   reader.onload = function (e) {
  //     setSumnail(e.target.result);
  //   };
  // };

  return (
    <div>
      <Global />
      <Overlay onClick={e => setPostVisible(false)} />
      <PostModalContainer>
        <PostInfo>
          <Sumnail
            className="sumnail"
            // files={postData.image}
            // Sumnail={sumnail}
          />
          <div className="info">
            <p className="title">{postData.title}</p>
            <div className="time">
              <i className="fas fa-clock"></i>
              {postData.meetTime}
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              {postData.address}
            </div>
            <div className="Personnel">
              <i className="fas fa-user-friends"></i>
              {postData.personnel}
            </div>
          </div>
        </PostInfo>
        <Contents>{postData.content}</Contents>
      </PostModalContainer>
    </div>
  );
};

export default PostModal;
