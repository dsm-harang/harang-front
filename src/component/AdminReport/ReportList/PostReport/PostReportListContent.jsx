import React, { useCallback } from 'react';
import * as S from '../../style';

const PostReportListContent = ({
  id,
  title,
  writer,
  date,
  deleteContent,
  deletePostInDatabase,
}) => {
  const deleteContentButtonClickHandler = useCallback(() => {
    deleteContent(id);
  }, [id, deleteContent]);
  const deletePostInDatabaseButtonClickHandler = useCallback(() => {
    deletePostInDatabase(id);
  }, [id, deletePostInDatabase]);
  return (
    <S.AdminPostListContent>
      <div className="id">{id}</div>
      <div className="title">{title}</div>
      <div className="writer">{writer}</div>
      <div className="date">
        <p>{date}</p>
        <S.AdminReportReportListButton>자세히</S.AdminReportReportListButton>
        <S.AdminReportReportListButton
          onClick={deleteContentButtonClickHandler}
        >
          삭제
        </S.AdminReportReportListButton>
        <S.AdminReportReportWaringListButton
          onClick={deletePostInDatabaseButtonClickHandler}
        >
          게시물 삭제
        </S.AdminReportReportWaringListButton>
      </div>
    </S.AdminPostListContent>
  );
};

export default PostReportListContent;
