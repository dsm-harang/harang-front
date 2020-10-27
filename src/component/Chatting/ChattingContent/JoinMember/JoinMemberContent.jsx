import React from 'react';
import * as S from '../../style';
import JoinMemberStar from './JoinMemberStar';
const JoinMemberContent = ({ user, img, star }) => {
  return (
    <S.ChattingJoinMemberContent>
      <S.ChattingJoinMemberImg src={img} />
      <p>{user}</p>
      <JoinMemberStar star={star} />
    </S.ChattingJoinMemberContent>
  );
};

export default JoinMemberContent;
