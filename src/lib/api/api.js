import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getRequest = () =>
  axios.create({
    baseURL: SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });

export const getUrl = (url, params) => {
  if (params === undefined) return url;
  return `${url}/${params}`;
};
