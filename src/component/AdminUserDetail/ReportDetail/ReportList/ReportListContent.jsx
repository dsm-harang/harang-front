import React from 'react';
import * as S from '../../style';

const ReportListContent = ({ report }) => {
  return (
    <>
      <S.AdminReportListContent>
        <p className="report">{report}</p>
      </S.AdminReportListContent>
    </>
  );
};

export default ReportListContent;
