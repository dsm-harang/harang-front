import React from 'react';
import * as S from '../../style';
import JoinMemberContent from './JoinMemberContent';

const JoinMember = ({ chattingMember }) => {
  const setJoinMemberContent = joinMembers => {
    return joinMembers.map(joinMember => {
      const { id } = joinMember;
      return <JoinMemberContent {...joinMember} key={id} />;
    });
  };
  return (
    <S.ChattingJoinMember>
      {setJoinMemberContent(chattingMember)}
    </S.ChattingJoinMember>
  );
};

export default JoinMember;
