import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getRequest = () =>
  axios.create({
    baseURL: SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Refresh-Token': localStorage.getItem('accessToken'),
    },
  });
