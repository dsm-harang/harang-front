import React from 'react';
import ProfileUserImg from './ProfileUserImg';
import ProfileStar from './ProfileStar';
import * as S from '../../style';

const Profile = ({ img, imgChange, userName, isMine }) => {
  return (
    <S.MypageUser>
      <ProfileUserImg img={img} imgChange={imgChange} isMine={isMine} />
      <S.MypageProfileDataWrapper>
        <div>
          <S.MypageUserName>{userName}</S.MypageUserName>
          <ProfileStar star={3} />
        </div>
      </S.MypageProfileDataWrapper>
    </S.MypageUser>
  );
};

export default Profile;
