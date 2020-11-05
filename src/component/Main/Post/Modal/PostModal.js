import React from 'react';
import {
  Overlay,
  PostModalContainer,
  PostInfo,
  Contents,
  Sumnail,
} from './ModalStyle';
import { createGlobalStyle } from 'styled-components';
const Global = createGlobalStyle`
body{
  height:100%; min-height:100%; overflow:hidden !important; touch-action:none;
}`;
const PostModal = ({ postData, setPostVisible }) => {
  return (
    <div>
      <Global />
      <Overlay onClick={e => setPostVisible(false)} />
      <PostModalContainer>
        <PostInfo>
          <Sumnail
            className="sumnail"
            src="https://lh3.googleusercontent.com/proxy/9HFmXAjEI6sBb2srGLKe4PwobqdHyMd4YCLxa6j6kVWBNiIibjelwoN9Dwwep3VyXWSTi41luIL8xAxBPlSx8zDaAji5_wfkQhGxA3u-43oqytHJdWAmNawGDFyIG_erbUAp05XhE0qSrHpGGcpGMdvEcYSH"
          />
          <div className="info">
            <p className="title">{postData.title}</p>
            <div className="time">
              <i className="fas fa-clock"></i>
              {postData.time}
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
              {postData.loaction}
            </div>
            <div className="Personnel">
              <i className="fas fa-user-friends"></i>
              {postData.person_num}
            </div>
          </div>
        </PostInfo>
        <Contents>asasds</Contents>
      </PostModalContainer>
    </div>
  );
};

export default PostModal;
