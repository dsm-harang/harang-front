import React from 'react';
import { useCallback } from 'react';
import * as S from '../../style';
import ChattingLog from './ChattingLog';
import ChattingInput from './ChattingInput';

const Chatting = ({ chattingLogList, sendChatting }) => {
  const setChattingLog = useCallback(chattingLogList => {
    return chattingLogList.map(chattingLog => (
      <ChattingLog
        isMine={chattingLog.isMine}
        text={chattingLog.text}
        user={chattingLog.user}
        key={`${chattingLog.user}${chattingLog.text}`}
      />
    ));
  }, []);
  return (
    <S.ChattingLogWrapper>
      <div>{setChattingLog(chattingLogList)}</div>
      <ChattingInput sendChatting={sendChatting} />
    </S.ChattingLogWrapper>
  );
};

export default Chatting;
