import React from 'react';
import * as S from '../../style';

const UserName = ({ name, id }) => {
  return (
    <S.AdminUserInfoContentDiv>
      <S.AdminUserInfoHeader>이름</S.AdminUserInfoHeader>
      <S.AdminUserName>{name}</S.AdminUserName>
      <S.AdminUserId>({id})</S.AdminUserId>
    </S.AdminUserInfoContentDiv>
  );
};

export default UserName;
