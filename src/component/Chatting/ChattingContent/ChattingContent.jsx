import React from 'react';
import * as S from '../style';
import { Chatting } from './Chatting';
import { JoinMember } from './JoinMember';
const ChattingContent = ({ target, chattingLogList, chattingMember }) => {
  return (
    <S.ChattingMain>
      <S.ChattingHeader>{target.name}</S.ChattingHeader>
      <div className="wrapper">
        <Chatting chattingLogList={chattingLogList} />
        <JoinMember chattingMember={chattingMember} />
      </div>
    </S.ChattingMain>
  );
};

export default ChattingContent;
