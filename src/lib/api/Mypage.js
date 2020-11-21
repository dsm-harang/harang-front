import { getRequest, getUrl } from './api';
import {
  PROFILE_URL,
  STAR_URL,
  NOTIFY_URL,
  RECODE_URL,
  USER_REPORT_URL,
  APPROVE_URL,
  GET_COMMENT_REQUIRE_LIST_URL,
  GET_APPROVE_LIST_URL,
} from './ServerUrl';

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

export const reportUser = (id, body) => {
  return getRequest().post(getUrl(USER_REPORT_URL, id), body);
};

export const setRequestApprove = id => {
  return getRequest().get(getUrl(APPROVE_URL, id));
};

export const getCommentRequireList = id => {
  return getRequest().get(getUrl(GET_COMMENT_REQUIRE_LIST_URL, id));
};

export const getRequestApproveList = id => {
  return getRequest().get(getUrl(GET_APPROVE_LIST_URL, id));
};
