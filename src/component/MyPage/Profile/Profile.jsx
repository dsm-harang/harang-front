import React from 'react';
import ProfileUser from './ProfileUser';
import * as S from '../style';

const Profile = ({
  img,
  imgChange,
  userName,
  isMine,
  modalOn,
  star,
  setUserInfo,
}) => {
  return (
    <div>
      <S.Profile>
        <ProfileUser
          img={img}
          userName={userName}
          imgChange={imgChange}
          isMine={isMine}
          star={star}
          setUserInfo={setUserInfo}
        />
        {isMine ? (
          ''
        ) : (
          <S.ProfileReport onClick={modalOn}>
            <div>
              <div />
              <p>신고하기</p>
            </div>
          </S.ProfileReport>
        )}
      </S.Profile>
    </div>
  );
};

export default Profile;
