import React from 'react';
import * as S from '../../style';

const UserImg = ({ src }) => {
  return (
    <S.AdminUserInfoContentDiv>
      <S.AdminUserImg src={src} />
    </S.AdminUserInfoContentDiv>
  );
};

export default UserImg;
