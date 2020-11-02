import { getRequest, getUrl } from './api';
import { PROFILE_URL, STAR_URL, NOTIFY_URL, RECODE_URL } from './ServerUrl';

export const getUserInfo = id => {
  return getRequest().get(getUrl(PROFILE_URL, id));
};

export const setComment = (id, body) => {
  return getRequest().post(getUrl(STAR_URL, id), body);
};

export const getAlarm = id => {
  return getRequest().get(getUrl(NOTIFY_URL, id));
};

export const getComment = id => {
  return getRequest().get(getUrl(STAR_URL, id));
};

export const getRecode = id => {
  return getRequest().get(getUrl(RECODE_URL, id));
};
