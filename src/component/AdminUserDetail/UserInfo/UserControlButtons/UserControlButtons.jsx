import React from 'react';
import { useCallback } from 'react';
import * as S from '../../style';

const UserControlButtons = ({
  deleteUserAndChangePage,
  resetStarAndSetState,
}) => {
  const deleteUserButtonClickHandler = useCallback(() => {
    deleteUserAndChangePage();
  }, []);
  const resetStarButtonClickHandler = useCallback(() => {
    resetStarAndSetState();
  }, []);
  return (
    <S.AdminUserInfoContentDiv>
      <S.AdminUserControlWaringButton onClick={deleteUserButtonClickHandler}>
        회원 삭제
      </S.AdminUserControlWaringButton>
      <S.AdminUserControlButton onClick={resetStarButtonClickHandler}>
        별점 초기화
      </S.AdminUserControlButton>
    </S.AdminUserInfoContentDiv>
  );
};

export default UserControlButtons;
