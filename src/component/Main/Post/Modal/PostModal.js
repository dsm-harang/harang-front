import React from 'react';
import {
  Overlay,
  PostModalContainer,
  PostInfo,
  Contents,
  Sumnail,
  Global,
} from './ModalStyle';

const PostModal = ({ setPostVisible }) => {
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
            <p className="title"></p>
            <div className="time">
              <i className="fas fa-clock"></i>
            </div>
            <div className="location">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="Personnel">
              <i className="fas fa-user-friends"></i>
            </div>
          </div>
        </PostInfo>
        <Contents></Contents>
      </PostModalContainer>
    </div>
  );
};

export default PostModal;
