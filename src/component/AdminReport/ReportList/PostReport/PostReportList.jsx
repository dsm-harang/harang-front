import React, { useCallback } from 'react';
import * as S from '../../style';
import PostReportListHeaderContent from './PostReportListHeaderContent';
import PostReportListContent from './PostReportListContent';

const PostReportList = React.forwardRef(
  ({ reportList, deleteContent, deletePostInDatabase }, ref) => {
    const setContent = useCallback(
      reportList => {
        return reportList.map(({ id, title, writer, reportDate, postId }) => (
          <PostReportListContent
            id={id}
            title={title}
            writer={writer}
            date={reportDate}
            postId={postId}
            deleteContent={deleteContent}
            deletePostInDatabase={deletePostInDatabase}
            key={id + title}
          />
        ));
      },
      [reportList],
    );
    return (
      <S.AdminDefaultList ref={ref}>
        <S.AdminDefaultListHeader>신고된 게시물</S.AdminDefaultListHeader>
        <PostReportListHeaderContent />
        <S.AdminDefaultListContentDiv>
          {setContent(reportList)}
        </S.AdminDefaultListContentDiv>
      </S.AdminDefaultList>
    );
  },
);

export default React.memo(PostReportList);
