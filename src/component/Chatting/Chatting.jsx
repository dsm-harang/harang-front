import React, { useState, useCallback, useEffect } from 'react';
import * as S from './style';
import { Navigation } from './Navigation';
import { ChattingContent } from './ChattingContent';
import Socket, {
  getChattingList,
  getChattingLog,
} from '../../lib/api/Chatting';
import { getUserInfo } from '../../lib/api/Mypage';

const Chatting = () => {
  const [chattingMember, chattingMemberChange] = useState([]);
  const [chattingList, chattingListChange] = useState([]);
  const [chattingLogList, chattingLogListChange] = useState([]);
  const [checkedChattingId, checkedChattingIdChange] = useState(null);
  const [socket, socketChange] = useState(null);
  const [userId, userIdChange] = useState(0);
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
    socket.send(text, userId, checkedChattingId);
  };
  const changeChattingRoom = useCallback(
    id => {
      socket.joinRoom(id);
      checkedChattingIdChange(id);
      getChattingLogAndSetState(id);
      socket.receive(receiveHandler);
    },
    [socket, checkedChattingId, chattingLogList],
  );
  const getChattingListResponseToState = useCallback(response => {
    return response.map(chattingListElement => ({
      id: chattingListElement.roomId,
      name: chattingListElement.roomTitle,
      postId: chattingListElement.postid,
    }));
  }, []);
  const getChattingListAndSetState = useCallback(async () => {
    const { data } = await getChattingList();
    const newState = getChattingListResponseToState(data[0].messageRoom);
    chattingListChange(newState);
  }, []);
  const getChattingLogResponseToState = useCallback(response => {
    return response.map(chattingLogElement => ({
      text: chattingLogElement.message,
      user: chattingLogElement.userId,
      mine: chattingLogElement.mine,
      name: chattingLogElement.userName,
    }));
  }, []);
  const getChattingLogAndSetState = useCallback(async roomId => {
    const { data } = await getChattingLog(roomId);
    const newState = getChattingLogResponseToState(data);
    chattingLogListChange(newState);
  }, []);
  const getUserInfoAndSetState = async () => {
    try {
      const { data } = await getUserInfo();
      userIdChange(data.id);
    } catch (error) {}
  };
  const receiveHandler = useCallback(
    message => {
      const newMessage = {
        user: message.userId,
        mine: message.mine,
        name: message.userName,
        text: message.message,
      };
      chattingLogListChange(prev => [...prev, newMessage]);
    },
    [chattingLogList],
  );
  useEffect(() => {
    getChattingListAndSetState();
    getUserInfoAndSetState();
    const socket = new Socket();
    socketChange(socket);
  }, []);
  return (
    <S.Chatting>
      <Navigation
        chattingList={chattingList}
        checkedChattingId={checkedChattingId}
        checkedChattingIdChange={changeChattingRoom}
        socket={socket}
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
