import React, { useCallback } from 'react';
import ReviewModalStar from './ReviewModalStar';
import * as S from '../../style';

const RequestApproveModalContent = ({
  name,
  id,
  star,
  src,
  starChange,
  deleteData,
}) => {
  const buttonClickHandler = useCallback(() => {
    deleteData(id);
  }, [id]);
  const starClickHandler = useCallback(
    star => {
      starChange(id, star);
    },
    [id],
  );
  return (
    <S.BoardContent>
      <S.BoardUserImg src={src} />
      <S.BoardContentText>{name}</S.BoardContentText>
      <ReviewModalStar star={star} starChange={starClickHandler} />
      <S.ReviewButton onClick={buttonClickHandler}>별점주기</S.ReviewButton>
    </S.BoardContent>
  );
};

export default RequestApproveModalContent;
