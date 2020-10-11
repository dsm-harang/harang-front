import React from 'react';
import ProfileUser from './ProfileUser';
import * as S from '../style';

const Profile = ({ img, imgChange, userName }) => {
  return (
    <div>
      <S.Profile>
        <ProfileUser img={img} userName={userName} imgChange={imgChange} />
      </S.Profile>
    </div>
  );
};

export default Profile;
