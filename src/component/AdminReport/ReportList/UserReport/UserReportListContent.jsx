import React, { useCallback } from 'react';
import * as S from '../../style';
import { useHistory } from 'react-router-dom';

const UserReportListContent = ({
  id,
  name,
  targetId,
  targetUserId,
  reportDate,
  deleteContent,
}) => {
  const history = useHistory();
  const deleteContentButtonClickHandler = useCallback(() => {
    deleteContent(id);
  }, [id, deleteContent]);
  const moveDetailPage = useCallback(() => {
    history.push(`/admin/user/${targetId}`);
  }, [id]);
  return (
    <S.AdminUserReportListContent>
      <div className="id">{id}</div>
      <div className="name">{name}</div>
      <div className="targetUserId">{targetUserId}</div>
      <div className="date">
        <p>{reportDate}</p>
      </div>
      <div className="reason">
        <S.AdminReportReportListButton onClick={moveDetailPage}>
          읽기
        </S.AdminReportReportListButton>
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
