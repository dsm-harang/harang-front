import React, { useCallback } from 'react';
import * as S from '../style';
import { Chatting } from './Chatting';
import { JoinMember } from './JoinMember';
const ChattingContent = ({
  target,
  chattingLogList,
  chattingMember,
  sendChatting,
}) => {
  const setHeaderName = useCallback(target => {
    return target ? target.name : '채팅방이 없습니다.';
  }, []);
  return (
    <S.ChattingMain>
      <S.ChattingHeader>{setHeaderName(target)}</S.ChattingHeader>
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
