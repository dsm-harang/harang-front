import React from 'react';
import * as S from '../style';
import { Chatting } from './Chatting';
import { JoinMember } from './JoinMember';
const ChattingContent = ({
  target,
  chattingLogList,
  chattingMember,
  sendChatting,
}) => {
  return (
    <S.ChattingMain>
      <S.ChattingHeader>{target.name}</S.ChattingHeader>
      <div className="wrapper">
        <Chatting
          chattingLogList={chattingLogList}
          sendChatting={sendChatting}
        />
        <JoinMember chattingMember={chattingMember} />
      </div>
    </S.ChattingMain>
  );
};

export default ChattingContent;
