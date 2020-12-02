import React from 'react';
import * as S from './style';

const Star = ({ star }) => {
  return (
    <S.StarBakcground>
      <S.Star star={star} />
    </S.StarBakcground>
  );
};

export default Star;
