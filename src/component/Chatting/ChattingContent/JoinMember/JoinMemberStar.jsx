import React from 'react';
import * as S from '../../style';

const JoinMemberStar = ({ star }) => {
  return (
    <S.ChattingStarWrapper>
      <S.ChattingStarWrapper>
        <S.ChattingStar star={star} />
      </S.ChattingStarWrapper>
    </S.ChattingStarWrapper>
  );
};

export default JoinMemberStar;
