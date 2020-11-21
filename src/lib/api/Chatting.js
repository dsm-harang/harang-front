import Stomp from 'stompjs';
import SockJs from 'sockjs-client';
import { SERVER_URL, getRequest, getUrl } from './api';
import { ROOM_URL, ROOMS_URL } from './ServerUrl';

class Socket {
  constructor() {
    this.isConnected = false;
    const socket = new SockJs('/chat');
    this.client = Stomp.over(socket);
  }
  subscribe(chatRoom, callback) {
    this.client.connect({}, () => {
      this.client.subscribe('/topic/' + chatRoom, message => {
        callback(message);
      });
    });
  }
  sendMessage(roomId, sender, message) {
    const data = {
      chatRoomId: roomId,
      sender,
      message,
    };
    this.client.send('/app/chat/send', {}, data);
  }
}

export const getChattingList = id => {
  const url = getUrl(ROOMS_URL, id);
  return getRequest().get(url);
};

export const getChattingLog = roomId => {
  const url = getUrl(ROOM_URL, roomId);
  return getRequest().get(url);
};

export default Socket;
