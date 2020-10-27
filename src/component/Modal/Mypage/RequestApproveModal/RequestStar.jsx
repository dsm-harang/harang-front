import React from 'react';
import { useCallback } from 'react';
import * as S from '../../style';

const RequestStar = ({ star }) => {
  return (
    <S.ModalStarWrapper>
      <S.ModalStarWrapper>
        <S.ModalStar star={star} />
      </S.ModalStarWrapper>
    </S.ModalStarWrapper>
  );
};

export default RequestStar;
