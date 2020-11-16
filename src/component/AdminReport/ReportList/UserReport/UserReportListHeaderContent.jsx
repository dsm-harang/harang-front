import React from 'react';
import * as S from '../../style';

const UserReportListHeaderContent = () => {
  return (
    <S.AdminUserReportListHeaderContent>
      <div className="id">ID</div>
      <div className="name">NAME</div>
      <div className="targetUserId">WRITER</div>
      <div className="date">DATE</div>
      <div className="reason">REASON</div>
    </S.AdminUserReportListHeaderContent>
  );
};

export default UserReportListHeaderContent;
