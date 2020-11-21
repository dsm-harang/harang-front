import React from 'react';
import * as S from '../../style';

const UserReportCount = ({ count }) => {
  return (
    <S.AdminUserInfoContentDiv>
      <S.AdminUserInfoHeader>신고 횟수</S.AdminUserInfoHeader>
      <S.AdminUserReportCount>{count}회</S.AdminUserReportCount>
    </S.AdminUserInfoContentDiv>
  );
};

export default UserReportCount;
