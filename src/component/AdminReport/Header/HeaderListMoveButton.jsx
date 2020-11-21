import React, { useCallback } from 'react';
import * as S from '../style';

const HeaderListMoveButton = ({ pageMove, page }) => {
  const pageChangeButtonClickHandler = useCallback(() => {
    pageMove(page);
  }, [page, pageMove]);
  return (
    <S.AdminReportListMoveButton
      onClick={pageChangeButtonClickHandler}
      page={page}
    >
      <div className="top" />
      <div className="bottom" />
    </S.AdminReportListMoveButton>
  );
};

export default HeaderListMoveButton;
