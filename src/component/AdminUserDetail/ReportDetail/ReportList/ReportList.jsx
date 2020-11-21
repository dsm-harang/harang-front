import React, { useCallback } from 'react';
import * as S from '../../style';
import ReportListContent from './ReportListContent';

const ReportList = ({ reportList }) => {
  const setContent = useCallback(reportList => {
    return reportList.map(report => (
      <ReportListContent userName={report.name} report={report.report} />
    ));
  }, []);
  return (
    <S.AdminReportList>
      <S.AdminReportListHeader>신고내역</S.AdminReportListHeader>
      <S.AdminReportListContentDiv>
        {setContent(reportList)}
      </S.AdminReportListContentDiv>
    </S.AdminReportList>
  );
};

export default ReportList;
