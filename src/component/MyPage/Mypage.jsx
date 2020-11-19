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
} from '../../lib/api/Mypage';

const MODAL_TYPE_REVIEW = 'review';
const MODAL_TYPE_REQUEST = 'request';
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
  const setModalRequestModal = useCallback(() => {
    modalTypeChange('RequestApproveModal');
  }, []);
  const setModalReviewModal = useCallback(() => {
    modalTypeChange('ReviewModal');
  }, []);
  const setModalReportModal = useCallback(() => {
    modalTypeChange('ReportModal');
  });
  const setModalData = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArray;
    else if (modalType === 'ReviewModal') {
      return reviewDataArray;
    }
    return [];
  }, [requestDataArray, reviewDataArray, modalType]);
  const setModalDataChangeFunction = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArrayChange;
    if (modalType === 'ReviewModal') return reviewDataArrayChange;
    return () => {};
  }, [requestDataArrayChange, reviewDataArrayChange, modalType]);
  const getUserInfoAndSetState = useCallback(async () => {
    try {
      const { data } = await getUserInfo(id);
      imgChange(data.imagepath);
      userNameChange(data.name);
      idChange(data.user_id);
      starChange(data.score);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const recodeResponseToState = useCallback((response, index) => {
    return response.map(recode => ({
      id: index,
      text: recode.title,
    }));
  }, []);
  const getRecodeAndSetState = useCallback(async () => {
    try {
      const { data } = await getRecode();
      const newState = recodeResponseToState(data);
      storageArrayChange(newState);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const commentResponseToState = useCallback(response => {
    return response.map(comment => ({
      text: comment.score.score_content,
      userName: comment.score.target_name,
      star: comment.score.score,
    }));
  }, []);
  const getCommentAndSetState = useCallback(async () => {
    try {
      const { data } = await getComment(id);
      const newState = commentResponseToState(data);
      commentsChange(newState);
    } catch (error) {}
  }, [id]);
  const alarmResponseToState = useCallback((response, index) => {
    return response.map(alarm => ({
      text: alarm.content,
      id: alarm.id,
      type: alarm.type,
      userId: alarm.userId,
      postId: alarm.postId,
    }));
  }, []);
  const getAlarmAndSetState = useCallback(async () => {
    try {
      const { data } = await getAlarm();
      const newState = alarmResponseToState(data);
      noticeArrayChange(newState);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
    [noticeArray, setModalReviewModal, setModalRequestModal],
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
  return (
    <>
      <Modal
        modalType={modalType}
        onDelete={modalDelete}
        data={setModalData()}
        dataChange={setModalDataChangeFunction()}
        modalId={modalId}
        modalIdChange={modalIdChange}
        star={star}
      />
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
