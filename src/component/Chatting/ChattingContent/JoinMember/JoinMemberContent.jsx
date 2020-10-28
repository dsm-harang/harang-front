import React from 'react';
import * as S from '../../style';
import Star from '../../../Default/Star';

const JoinMemberContent = ({ user, img, star }) => {
  return (
    <S.ChattingJoinMemberContent>
      <S.ChattingJoinMemberImg src={img} />
      <p>{user}</p>
      <Star star={star} />
    </S.ChattingJoinMemberContent>
  );
};

export default JoinMemberContent;
