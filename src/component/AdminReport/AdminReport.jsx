import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './style';
import ReportList, { UserReport, PostReport } from './ReportList';
import Header from './Header';
import {
  getAdminReportUserList,
  getAdminReportPostList,
  deleteReportPost,
  deleteReportUser,
  deletePost,
} from '../../lib/api/Admin';
import { useHistory } from 'react-router';

const ADMIN_NOT_FOUND_MESSAGE = 'Admin Not Found';

const AdminReport = ({ selectedContentIdChange }) => {
  const history = useHistory();
  const firstPage = useRef();
  const secondPage = useRef();
  const [page, pageChange] = useState(1);
  const [userReportList, userReportListChange] = useState([]);
  const [postReportList, postReportListChange] = useState([]);
  const requestErrorHandler = useCallback(error => {
    const data = error.response.data;
    if (data.status === 403) {
      history.push('/login');
    }
  });
  const deleteUserReportListChangeWithId = useCallback(
    async id => {
      try {
        await deleteReportUser(id);
        const buffer = filterList(id, userReportList);
        userReportListChange(buffer);
      } catch (error) {
        requestErrorHandler(error);
      }
    },
    [userReportListChange, userReportList],
  );
  const deletePostReportListChangeWithId = useCallback(
    async id => {
      try {
        await deleteReportPost(id);
        const buffer = filterList(id, postReportList);
        postReportListChange(buffer);
      } catch (error) {
        requestErrorHandler(error);
      }
    },
    [postReportListChange, postReportList],
  );
  const deletePostAndSetState = useCallback(async (id, postId) => {
    try {
      await deletePost(postId);
      const buffer = filterList(id, postReportList);
      postReportListChange(buffer);
    } catch (error) {
      requestErrorHandler(error);
    }
  }, []);
  const filterList = useCallback((id, list) => {
    return list.filter(content => content.id !== id);
  }, []);
  const pageMove = useCallback(
    page => {
      if (page === 1) {
        secondPage.current.scrollIntoView({ behavior: 'smooth' });
        pageChange(2);
      } else {
        firstPage.current.scrollIntoView({ behavior: 'smooth' });
        pageChange(1);
      }
    },
    [firstPage, secondPage],
  );
  const getReportUserListAndSetState = useCallback(async () => {
    try {
      const { data } = await getAdminReportUserList();
      const newState = reportUserListResponseToState(data);
      userReportListChange(newState);
    } catch (error) {
      requestErrorHandler(error);
    }
  }, []);
  const reportUserListResponseToState = useCallback(dataList => {
    return dataList.map(
      ({ id, targetId, targetName, reportTime, targetUserId }) => ({
        id,
        name: targetName,
        targetUserId: targetUserId,
        reportDate: reportTime,
        targetId: targetId,
      }),
    );
  });
  const getReportPostListAndSetState = useCallback(async () => {
    try {
      const { data } = await getAdminReportPostList();
      const newState = reportPostListResponseToState(data);
      postReportListChange(newState);
    } catch (error) {
      requestErrorHandler(error);
    }
  }, []);
  const reportPostListResponseToState = useCallback(dataList => {
    return dataList.map(({ id, title, writer, reportTime, postId }) => ({
      id,
      postId,
      title: title,
      writer,
      reportDate: reportTime,
    }));
  });
  useEffect(() => {
    selectedContentIdChange('report');
    getReportUserListAndSetState();
    getReportPostListAndSetState();
  }, []);
  return (
    <S.AdminReport>
      <Header pageMove={pageMove} page={page} />
      <S.AdminReportBody>
        <div>
          <S.AdminReportListWrapper>
            <ReportList
              compRef={firstPage}
              Component={PostReport}
              reportList={postReportList}
              deleteContent={deletePostReportListChangeWithId}
              deletePostInDatabase={deletePostAndSetState}
            />
            <ReportList
              compRef={secondPage}
              Component={UserReport}
              reportList={userReportList}
              deleteContent={deleteUserReportListChangeWithId}
            />
          </S.AdminReportListWrapper>
        </div>
      </S.AdminReportBody>
    </S.AdminReport>
  );
};

export default AdminReport;
