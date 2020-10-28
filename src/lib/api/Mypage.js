import { getRequest } from './api';
import { PROFILE_URL, STAR_URL } from './ServerUrl';

export const getUserInfo = () => {
  return getRequest().get(PROFILE_URL);
};

export const setUserStar = () => {
  return getRequest().post(STAR_URL);
};

export const getAlarm = () => {
  return getRequest();
};

export const getComment = () => {
  return getRequest();
};

export const setUserComment = () => {
  return getRequest();
};
