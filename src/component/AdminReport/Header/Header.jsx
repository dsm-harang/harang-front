import React from 'react';
import * as S from '../style';
import HeaderListMoveButton from './HeaderListMoveButton';

const Header = ({ pageMove, page }) => {
  return (
    <S.AdminReportHeader>
      <div>
        <S.AdminReportTitle>신고 관리</S.AdminReportTitle>
        <HeaderListMoveButton pageMove={pageMove} page={page} />
      </div>
    </S.AdminReportHeader>
  );
};

export default Header;
