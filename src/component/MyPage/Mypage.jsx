import React, { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from './Profile';
import Notice from './Notice';
import Storage from './Storage';
import Modal from '../Modal';
import Comment from './Comment';
import AnotherComment from './AnotherCommnet';
import * as S from './style';
import {
  getAlarm,
  getComment,
  getRecode,
  getUserInfo,
  setComment,
  setRequestApprove,
  reportUser,
  getCommentRequireList,
  getRequestApproveList,
  setUserInfo,
  SERVER_URL,
} from '../../lib/api/Mypage';
import Header from '../Main/Header/MainHeader';

const DEFAULT_USER_IMG =
  'https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png';
const Mypage = () => {
  const location = useLocation();
  const [id, idChange] = useState(location.pathname.split('/')[2]);
  const [isMine, isMineChange] = useState();
  const [noticeArray, noticeArrayChange] = useState([]);
  const [storageArray, storageArrayChange] = useState([]);
  const [img, imgChange] = useState(DEFAULT_USER_IMG);
  const [requestDataArray, requestDataArrayChange] = useState([]);
  const [userName, userNameChange] = useState('');
  const [description, descriptionChange] = useState();
  const [comments, commentsChange] = useState([]);
  const [reviewDataArray, reviewDataArrayChange] = useState([]);
  const [modalId, modalIdChange] = useState(-1);
  const [modalType, modalTypeChange] = useState('');
  const [star, starChange] = useState(0);

  const modalDelete = id => {
    modalTypeChange('');
    if (typeof id === 'number') {
      alarmDelete(id);
    }
  };
  const alarmDelete = id => {
    const buffer = noticeArray.filter(alarm => alarm.id !== id);
    noticeArrayChange(buffer);
  };
  const setModalRequestModal = useCallback(id => {
    modalTypeChange('RequestApproveModal');
    getRequestListAndSetState(id);
  }, []);
  const setModalReviewModal = useCallback(id => {
    modalTypeChange('ReviewModal');
    getCommentReqireListAndSetState(id);
  }, []);
  const setModalReportModal = useCallback(() => {
    modalTypeChange('ReportModal');
  });
  const setModalData = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArray;
    if (modalType === 'ReviewModal') return reviewDataArray;
    if (modalType === 'ReportModal') return id;
    return [];
  }, [requestDataArray, reviewDataArray, modalType, id]);
  const setModalDataChangeFunction = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArrayChange;
    if (modalType === 'ReviewModal') return reviewDataArrayChange;
    return () => {};
  }, [requestDataArrayChange, reviewDataArrayChange, modalType]);
  const setModalServerRequestFunction = useCallback(() => {
    if (modalType === 'RequestApproveModal') return setRequestApprove;
    else if (modalType === 'ReviewModal') return setComment;
    else if (modalType === 'ReportModal') return reportUser;
    else return () => {};
  }, [modalType, setRequestApprove, setComment, reportUser]);
  const getUserInfoAndSetState = useCallback(async () => {
    try {
      const { data } = await getUserInfo(id);
      imgChange(`${SERVER_URL}/image/${data.imagName}`);
      userNameChange(data.name);
      idChange(data.id);
      starChange(data.score);
    } catch (error) {}
  }, [id]);
  const recodeResponseToState = useCallback(response => {
    return response.map(recode => ({
      id: recode.postId,
      text: recode.postTitle,
    }));
  }, []);
  const getRecodeAndSetState = useCallback(async () => {
    try {
      const { data } = await getRecode();
      const newState = recodeResponseToState(data);
      storageArrayChange(newState);
    } catch (error) {}
  }, [id]);
  const commentResponseToState = useCallback(response => {
    return response.map(comment => ({
      text: comment.comment,
      userName: comment.senderName,
      star: comment.score,
    }));
  }, []);
  const getCommentAndSetState = useCallback(async () => {
    try {
      const { data } = await getComment(id);
      console.log(data);
      const newState = commentResponseToState(data);
      commentsChange(newState);
    } catch (error) {}
  }, [id]);
  const alarmResponseToState = useCallback((response, index) => {
    return response.map(alarm => ({
      text: alarm.content,
      id: alarm.notifyId,
      type: alarm.notifyType,
      userId: alarm.userUuid,
      postId: alarm.postId,
      notifyId: alarm.notifyId,
    }));
  }, []);
  const getAlarmAndSetState = useCallback(async () => {
    try {
      const { data } = await getAlarm();
      const newState = alarmResponseToState(data);
      noticeArrayChange(newState);
    } catch (error) {}
  }, [id]);
  const commentReqireListResponseToState = dataList => {
    return dataList.map(({ userName, imageName, userUuid, postId }) => ({
      name: userName,
      src: imageName,
      star: 0,
      review: '',
      userId: userUuid,
      postId: postId,
    }));
  };
  const getCommentReqireListAndSetState = useCallback(async id => {
    try {
      const { data } = await getCommentRequireList(id);
      const newState = commentReqireListResponseToState(data);
      console.log(newState);
      reviewDataArrayChange(newState);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const requestApproveListResponseToState = useCallback(dataList => {
    return dataList.map(data => ({
      name: data.score,
      name: data.userName,
      id: data.userId,
      src: data.imageName,
      applicationId: data.applicationId,
    }));
  }, []);
  const getRequestListAndSetState = useCallback(async id => {
    try {
      const { data } = await getRequestApproveList(id);
      const newState = requestApproveListResponseToState(data);
      requestDataArrayChange(newState);
    } catch (error) {}
  });
  const setUserInfoAndSetState = useCallback(async body => {
    try {
      await setUserInfo(body);
    } catch (error) {}
  });
  const renderNoticeComponent = useCallback(
    isMine => {
      if (isMine) {
        return (
          <Notice
            noticeContentArray={noticeArray}
            requestModalOn={setModalRequestModal}
            reviewModalOn={setModalReviewModal}
            modalIdChange={modalIdChange}
          />
        );
      }
      return <AnotherComment comments={comments} />;
    },
    [noticeArray, setModalReviewModal, setModalRequestModal, comments],
  );
  const renderCommentComponent = useCallback(
    isMine => {
      if (isMine) {
        return <Comment comments={comments} />;
      }
      return;
    },
    [comments],
  );
  useEffect(() => {
    if (location.pathname.split('/')[2]) {
      isMineChange(false);
      getUserInfoAndSetState(id);
    } else {
      isMineChange(true);
      getUserInfoAndSetState();
      getAlarmAndSetState();
    }
    getCommentAndSetState();
    getRecodeAndSetState();
  }, []);
  useEffect(() => {
    console.log(reviewDataArray);
  }, [reviewDataArray]);
  return (
    <>
      <Modal
        modalType={modalType}
        onDelete={modalDelete}
        data={setModalData()}
        dataChange={setModalDataChangeFunction()}
        requestFunction={setModalServerRequestFunction()}
        modalId={modalId}
        modalIdChange={modalIdChange}
        star={star}
      />
      <Header />
      <S.MypageDiv>
        <div>
          <div>
            <Profile
              description={description}
              descriptionChange={descriptionChange}
              userName={userName}
              img={img}
              imgChange={imgChange}
              isMine={isMine}
              modalOn={setModalReportModal}
              modalDelete={modalDelete}
              star={star}
              setUserInfo={setUserInfoAndSetState}
            />
            <Storage storageContentArray={storageArray} />
          </div>
          {renderNoticeComponent(isMine)}
        </div>
        <div>{renderCommentComponent(isMine)}</div>
      </S.MypageDiv>
    </>
  );
};

export default Mypage;
