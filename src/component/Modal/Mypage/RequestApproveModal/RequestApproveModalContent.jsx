import React, { useCallback } from 'react';
import { SERVER_URL } from '../../../../lib/api/api';
import Star from '../../../Default/Star';
import * as S from '../../style';

const RequestApproveModalContent = ({
  name,
  id,
  src,
  star,
  setPersonChecked,
  applicationId,
}) => {
  const inputChangeHandler = useCallback(() => {
    setPersonChecked(applicationId);
  }, [applicationId]);
  return (
    <S.BoardContent>
      <S.BoardUserImg src={`${SERVER_URL}/image/${src}`} />
      <S.BoardContentText>{name}</S.BoardContentText>
      <Star star={star} />
      <label>
        <input type="checkbox" onChange={inputChangeHandler} />
        <div />
      </label>
    </S.BoardContent>
  );
};

export default RequestApproveModalContent;
