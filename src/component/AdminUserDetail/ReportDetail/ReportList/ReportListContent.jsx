import React from 'react';
import * as S from '../../style';

const ReportListContent = ({ userName, report }) => {
  return (
    <>
      <S.AdminReportListContentName>{userName}</S.AdminReportListContentName>
      <S.AdminReportListContent>
        <p className="report">{report}</p>
      </S.AdminReportListContent>
    </>
  );
};

export default ReportListContent;
