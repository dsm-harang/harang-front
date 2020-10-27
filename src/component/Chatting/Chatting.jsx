import React, { useState } from 'react';
import * as S from './style';
import { Navigation } from './Navigation';
import { ChattingContent } from './ChattingContent';
import { useCallback } from 'react';

const Chatting = () => {
  const [chattingMember, chattingMemberChange] = useState([
    { user: '누군가', img: '', id: 1, star: 3 },
  ]);
  const [chattingList, chattingListChange] = useState([{ id: 1, name: 'sth' }]);
  const [chattingLogList, chattingLogListChange] = useState([
    {
      text: 'test',
      isMine: true,
      user: '누 군가',
    },
  ]);
  const [checkedChattingId, checkedChattingIdChange] = useState(1);
  const getCheckedChatting = useCallback((checkedChattingId, chattingList) => {
    return chattingList.filter(
      chatting => chatting.id === checkedChattingId,
    )[0];
  }, []);
  return (
    <S.Chatting>
      <Navigation
        chattingList={chattingList}
        checkedChattingId={checkedChattingId}
        checkedChattingIdChange={checkedChattingIdChange}
      />
      <ChattingContent
        target={getCheckedChatting(checkedChattingId, chattingList)}
        chattingLogList={chattingLogList}
        chattingMember={chattingMember}
      />
    </S.Chatting>
  );
};

export default Chatting;
