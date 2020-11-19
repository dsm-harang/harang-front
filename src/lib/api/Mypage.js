import { getRequest, getUrl } from './api';
import { PROFILE_URL, STAR_URL, NOTIFY_URL, RECODE_URL } from './ServerUrl';

export const getUserInfo = id => {
  if (id) {
    return getRequest().get(getUrl(PROFILE_URL, id));
  } else {
    return getRequest().get(PROFILE_URL);
  }
};

export const setComment = (id, body) => {
  return getRequest().post(getUrl(STAR_URL, id), body);
};

export const getAlarm = () => {
  return getRequest().get(NOTIFY_URL);
};

export const getComment = id => {
  return getRequest().get(getUrl(STAR_URL, id));
};

export const getRecode = () => {
  return getRequest().get(RECODE_URL);
};
