import React, { useEffect, useState } from 'react';
import { getRequest, SERVER_URL } from '../../../../lib/api/api';
import {
  Overlay,
  PostModalContainer,
  PostInfo,
  Contents,
  Sumnail,
  Global,
} from './ModalStyle';

const PostModal = ({ setPostVisible, postId }) => {
  const [postData, setPostData] = useState({});

  useEffect(() => {
    getRequest()
      .get(`/post/${postId}`)
      .then(res => setPostData(res.data));
  }, []);

  const dateParse = () => {
    console.log(postData.meetTime != undefined);
    const dateData = postData.meetTime.split(' ');
    const date = dateData[0];
    const timeData = dateData[1].split(':');
    const hour = parseInt(timeData[0]) > 12 ? '오후' : '오전';

    return `${date} ${hour} ${parseInt(timeData[0]) % 12}시 ${
      parseInt(timeData[1]) > 0 ? timeData[1] + '분' : ''
    }`;
  };

  return (
    <div>
      <Global />
      <Overlay onClick={e => setPostVisible(false)} />
      <PostModalContainer>
        <PostInfo>
          <Sumnail
            className="sumnail"
            src={`${SERVER_URL}image/${postData.image}`}
          />
          <div className="info">
            <p className="title">{postData.title}</p>
            <div className="time">
              <i className="fas fa-clock"></i>
              {postData.meetTime != undefined && dateParse()}
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              {postData.address}
            </div>
            <div className="Personnel">
              <i className="fas fa-user-friends"></i>
              {postData.personnel}명 까지
            </div>
          </div>
        </PostInfo>
        <Contents>{postData.content}</Contents>
      </PostModalContainer>
    </div>
  );
};

export default PostModal;
