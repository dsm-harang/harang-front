import React from 'react';
import UserImg from './UserImg';
import UserName from './UserName';
import UserStar from './UserStar';
import UserControlButtons from './UserControlButtons/UserControlButtons';
import * as S from '../style';

const UserInfo = ({
  src,
  star,
  name,
  id,
  userId,
  resetStarAndSetState,
  deleteUserAndChangePage,
}) => {
  return (
    <S.AdminUserInfo>
      <UserImg src={src} />
      <UserName name={name} id={userId} />
      <UserStar star={star} />
      <UserControlButtons
        resetStarAndSetState={resetStarAndSetState}
        deleteUserAndChangePage={deleteUserAndChangePage}
      />
    </S.AdminUserInfo>
  );
};

export default UserInfo;
