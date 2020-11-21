import React from 'react';
import * as S from '../../style';
import Star from '../../../Default/Star';

const UserStar = ({ star }) => {
  return (
    <S.AdminUserInfoContentDiv>
      <S.AdminUserInfoHeader>별점</S.AdminUserInfoHeader>
      <S.AdminUserStar>{star} / 5</S.AdminUserStar>
      <Star star={star} />
    </S.AdminUserInfoContentDiv>
  );
};

export default UserStar;
