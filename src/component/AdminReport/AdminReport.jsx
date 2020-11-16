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

const AdminReport = ({ selectedContentIdChange }) => {
  const firstPage = useRef();
  const secondPage = useRef();
  const [page, pageChange] = useState(1);
  const [userReportList, userReportListChange] = useState([
    {
      id: 1,
      targetId: 1,
      name: 'test',
      targetUserId: 'test',
      date: '2020-11-11',
      reason: '존나 나댐',
    },
  ]);
  const [postReportList, postReportListChange] = useState([
    {
      id: 1,
      title: 'test',
      writer: 'test',
      date: '2020-11-11',
    },
    {
      id: 2,
      title: 'test',
      writer: 'test',
      date: '2020-11-11',
    },
  ]);
  const deleteUserReportListChangeWithId = useCallback(
    async id => {
      try {
        await deleteReportUser(id);
        const buffer = filterList(id, userReportList);
        userReportListChange(buffer);
      } catch (error) {}
    },
    [userReportListChange, userReportList],
  );
  const deletePostReportListChangeWithId = useCallback(
    async id => {
      try {
        await deleteReportPost();
        const buffer = filterList(id, postReportList);
        postReportListChange(buffer);
      } catch (error) {}
    },
    [postReportListChange, postReportList],
  );
  const deletePostAndSetState = useCallback(async id => {
    try {
      await deletePost(id);
      const buffer = filterList(id, postReportList);
      postReportListChange(buffer);
    } catch (error) {}
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
    const { data } = await getAdminReportUserList();
    const newState = reportUserListResponseToState(data);
    userReportListChange(newState);
  }, []);
  const reportUserListResponseToState = useCallback(dataList => {
    return dataList.map(
      ({ id, target_id, target_name, reportTime, target_user_id }) => ({
        id,
        name: target_name,
        targetUserId: target_user_id,
        reportDate: reportTime,
        targetId: target_id,
      }),
    );
  });
  const getReportPostListAndSetState = useCallback(async () => {
    const { data } = await getAdminReportPostList();
    const newState = reportPostListResponseToState(data);
    postReportListChange(newState);
  }, []);
  const reportPostListResponseToState = useCallback(dataList => {
    return dataList.map(({ id, title, writer, reportTime }) => ({
      id,
      title: title,
      writer: writer,
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
