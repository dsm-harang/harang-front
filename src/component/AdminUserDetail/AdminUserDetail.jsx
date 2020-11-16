import React, { useState, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as S from './style';
import UserInfo from './UserInfo';
import ReportDetail from './ReportDetail';
import {
  getAdminUserInfo,
  deleteUser,
  resetUserStar,
} from '../../lib/api/Admin';

const AdminUserDetail = () => {
  const { userId } = useParams();
  const history = useHistory();
  const initialUserInfo = {
    src: 'https://image.flaticon.com/icons/png/512/2143/2143305.png',
    userId: '',
    name: '',
    star: 0,
    id: userId,
  };
  const [reportList, reportListChange] = useState([]);
  const [userInfo, userInfoChange] = useState(initialUserInfo);
  const getUserInfoAndSetState = useCallback(async () => {
    try {
      const { data } = await getAdminUserInfo();
    } catch (error) {}
  }, []);
  const deleteUserAndChangePage = useCallback(async () => {
    try {
      await deleteUser(userId);
      history.push('/admin');
    } catch (error) {}
  }, [userId]);
  const resetStarAndSetState = useCallback(async () => {
    try {
      await resetUserStar(userId);
      const copy = { ...userInfo };
      copy.star = 0;
      userInfoChange(copy);
    } catch (error) {}
  }, [userId]);
  useEffect(() => {
    getUserInfoAndSetState();
  }, []);
  return (
    <S.AdminUserDetail>
      <S.AdminUserDetailBody>
        <S.AdminDetailTitle>{userInfo.name}님의 정보</S.AdminDetailTitle>
        <UserInfo
          {...userInfo}
          deleteUserAndChangePage={deleteUserAndChangePage}
          resetStarAndSetState={resetStarAndSetState}
        />
        <ReportDetail reportList={reportList} />
      </S.AdminUserDetailBody>
    </S.AdminUserDetail>
  );
};

export default AdminUserDetail;
