import React, { useCallback } from 'react';
import * as S from '../style';

const CommentStar = ({ star }) => {
  const setStar = useCallback(() => {
    let buffer = [];
    for (let i = 0; i < star; i++) {
      buffer = [...buffer, <S.CommentFullStar />];
    }
    for (let i = star; i < 5; i++) {
      buffer = [...buffer, <S.CommentEmptyStar />];
    }
    return buffer;
  }, [star]);
  return (
    <S.StarDiv>
      <S.StarWrapper>{setStar()}</S.StarWrapper>
    </S.StarDiv>
  );
};

export default CommentStar;
