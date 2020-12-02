import { getRequest, getUrl } from './api';
import {
  ADMIN_POST_URL,
  ADMIN_REPORT_POST_URL,
  ADMIN_REPORT_USER_URL,
  ADMIN_SCORE_RESET_URL,
  ADMIN_URL,
  ADMIN_USER_URL,
  ADMIN_LOGIN_URL,
} from './ServerUrl';

export const getAdminUserInfo = id => {
  return getRequest().get(getUrl(ADMIN_URL, id));
};

export const getAdminReportUserList = () => {
  return getRequest().get(ADMIN_USER_URL);
};

export const getAdminReportPostList = () => {
  return getRequest().get(ADMIN_POST_URL);
};

export const deletePost = id => {
  return getRequest().delete(getUrl(ADMIN_POST_URL, id));
};

export const deleteUser = id => {
  return getRequest().delete(getUrl(ADMIN_USER_URL, id));
};

export const resetUserStar = id => {
  return getRequest().delete(getUrl(ADMIN_SCORE_RESET_URL, id));
};

export const deleteReportPost = id => {
  return getRequest().delete(getUrl(ADMIN_REPORT_POST_URL, id));
};

export const deleteReportUser = id => {
  return getRequest().delete(getUrl(ADMIN_REPORT_USER_URL, id));
};

export const adminLogin = body => {
  return getRequest().post(ADMIN_LOGIN_URL, body);
};
