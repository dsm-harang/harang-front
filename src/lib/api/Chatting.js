import IO from 'socket.io-client';
import { SERVER_URL, getRequest, getUrl } from './api';
import { ROOM_URL, ROOMS_URL } from './ServerUrl';

class Socket {
  constructor() {
    const chattingUrl = `${SERVER_URL}`;
    this.IO = IO(chattingUrl);
  }
  sendChatting(text) {
    this.IO.emit('send');
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
