import React, { useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { Navigation } from './Navigation';
import { ChattingContent } from './ChattingContent';
import Socket, {
  getChattingList,
  getChattingLog,
} from '../../lib/api/Chatting';

const Chatting = () => {
  const [chattingMember, chattingMemberChange] = useState([]);
  const [chattingList, chattingListChange] = useState([]);
  const [chattingLogList, chattingLogListChange] = useState([]);
  const [checkedChattingId, checkedChattingIdChange] = useState(1);
  const [socket, socketChange] = useState(null);
  const getCheckedChatting = useCallback((checkedChattingId, chattingList) => {
    const target = chattingList.filter(
      chatting => chatting.id === checkedChattingId,
    )[0];
    if (typeof target === 'undefined') {
      return false;
    }
    return target;
  }, []);
  const sendChatting = text => {
    socket.sendChatting(text);
  };
  const getChattingListResponseToState = useCallback(response => {
    return response.map(chattingListElement => ({
      id: chattingListElement.chat_id,
      name: chattingListElement.chat_name,
    }));
  }, []);
  const getChattingListAndSetState = useCallback(async () => {
    const { data } = await getChattingList();
    const newState = getChattingListResponseToState(data);
    chattingListChange(newState);
  }, []);
  const getChattingLogResponseToState = useCallback(response => {
    return response.map(chattingLogElement => ({
      text: chattingLogElement.message,
      user: chattingLogElement.sender,
    }));
  }, []);
  const getChattingLogAndSetState = useCallback(async roomId => {
    const { data } = await getChattingLog(roomId);
    const newState = getChattingLogResponseToState(data);
    chattingLogListChange(newState);
  }, []);
  useEffect(() => {
    getChattingListAndSetState();
    getChattingLogAndSetState();
    const socket = new Socket();
    socketChange(socket);
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
        sendChatting={sendChatting}
      />
    </S.Chatting>
  );
};

export default Chatting;
