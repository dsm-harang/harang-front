import Stomp from '@stomp/stompjs';
import { SERVER_URL } from './env';

export const connectChatting = () => {
  const chattingUrl = `${SERVER_URL}`;
  Stomp.Client(chattingUrl);
};

export const sendChatting = () => {};

export const getChatting = () => {};
