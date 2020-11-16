import React, { useCallback } from 'react';
import * as S from '../../style';
import ReportListHeaderContent from './UserReportListHeaderContent';
import ReportListContent from './UserReportListContent';

const UserReport = React.forwardRef(({ reportList, deleteContent }, ref) => {
  const setContent = useCallback(
    reportList => {
      return reportList.map(report => (
        <ReportListContent
          {...report}
          deleteContent={deleteContent}
          key={report.id + report.writer}
        />
      ));
    },
    [reportList],
  );
  return (
    <S.AdminDefaultList ref={ref}>
      <S.AdminDefaultListHeader>신고된 유저</S.AdminDefaultListHeader>
      <ReportListHeaderContent />
      <S.AdminDefaultListContentDiv>
        {setContent(reportList)}
      </S.AdminDefaultListContentDiv>
    </S.AdminDefaultList>
  );
});

export default UserReport;
