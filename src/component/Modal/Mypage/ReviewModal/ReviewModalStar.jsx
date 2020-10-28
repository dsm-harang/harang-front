import React from 'react';
import { useCallback } from 'react';
import * as S from '../../style';

const ReviewModalStar = ({ star, starChange }) => {
  const setStar = useCallback(() => {
    let buffer = [];
    for (let i = 0; i < star; i++) {
      buffer = [
        ...buffer,
        <S.FullStar
          onClick={() => {
            starChange(i + 1);
          }}
        />,
      ];
    }
    for (let i = star; i < 5; i++) {
      buffer = [...buffer, <S.EmptyStar onClick={() => starChange(i + 1)} />];
    }
    return buffer;
  }, [star, starChange]);
  return <S.RequestStarWrapper>{setStar()}</S.RequestStarWrapper>;
};

export default ReviewModalStar;
