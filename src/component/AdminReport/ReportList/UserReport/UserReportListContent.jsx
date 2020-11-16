import React, { useCallback } from 'react';
import * as S from '../../style';

const UserReportListContent = ({
  id,
  name,
  targetId,
  targetUserId,
  date,
  deleteContent,
}) => {
  const deleteContentButtonClickHandler = useCallback(() => {
    deleteContent(id);
  }, [id, deleteContent]);
  return (
    <S.AdminUserReportListContent>
      <div className="id">{id}</div>
      <div className="name">{name}</div>
      <div className="targetUserId">{targetUserId}</div>
      <div className="date">
        <p>{date}</p>
      </div>
      <div className="reason">
        <S.AdminReportReportListButton>읽기</S.AdminReportReportListButton>
        <S.AdminReportReportListButton
          onClick={deleteContentButtonClickHandler}
        >
          삭제
        </S.AdminReportReportListButton>
      </div>
    </S.AdminUserReportListContent>
  );
};

export default UserReportListContent;
