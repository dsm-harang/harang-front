import io from 'socket.io-client';
import { getRequest, getUrl } from './api';
import { ROOM_URL } from './ServerUrl';

class Socket {
  constructor() {
    this.connect();
    this.connectError(e => console.log(e));
  }
  connect() {
    this.client = io.connect(
      `http://3.14.87.253:8080?token=${localStorage.getItem('accessToken')}`,
      {
        transports: ['websocket'],
      },
    );
    this.client.on('connect', () => {});
  }
  joinRoom(roomId) {
    this.client.emit('joinRoom', roomId);
  }
  send(message, userId, target) {
    console.log(this.client.connected);
    this.client.emit('send', { message, roomId: `${userId}:${target}` });
  }
  receive(callback) {
    this.client.on('receive', callback);
  }
  error(callback) {
    this.client.on('error', callback);
  }
  connectError(callback) {
    this.client.on('connect_error', callback);
  }
  disconnect() {
    this.client.disconnect();
  }
  getIsConnected() {
    return this.client.connected;
  }
  reset() {
    this.client.removeEventListener('send');
    this.client.removeEventListener('receive');
    this.client.removeEventListener('error');
    this.client.removeEventListener('connect_error');
  }
}

export const getChattingList = id => {
  const url = getUrl(ROOM_URL, id);
  return getRequest().get(url);
};

export const getChattingLog = roomId => {
  const url = getUrl(ROOM_URL, roomId);
  return getRequest().get(url);
};

export default Socket;
