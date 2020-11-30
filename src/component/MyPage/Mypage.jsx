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
  const [isMine, isMineChange] = useState(true);
  const [noticeArray, noticeArrayChange] = useState([
    { text: '리뷰를 작성해 주세요.', id: 1, type: MODAL_TYPE_REVIEW },
  ]);
  const [storageArray, storageArrayChange] = useState([
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
  ]);
  const [img, imgChange] = useState(DEFAULT_USER_IMG);
  const [requestDataArray, requestDataArrayChange] = useState([
    { name: '오준상', src: DEFAULT_USER_IMG, star: 4, isChecked: false, id: 1 },
  ]);
  const [userName, userNameChange] = useState('누군가');
  const [description, descriptionChange] = useState(
    '제 이름은 누군가입니다. 누굴까요 ㅋㅋㄹㅃㅃ',
  );
  const [comments, commentsChange] = useState([
    { text: '댓그으을', userName: '오준상', star: 5 },
  ]);
  const [reviewDataArray, reviewDataArrayChange] = useState([
    { name: '오준상', src: DEFAULT_USER_IMG, star: 0, id: 1, review: '' },
  ]);
  const [modalId, modalIdChange] = useState(-1);
  const [modalType, modalTypeChange] = useState('');
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
  }, [requestDataArray, reviewDataArray, modalType, id]);
  const setModalDataChangeFunction = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArrayChange;
    if (modalType === 'ReviewModal') return reviewDataArrayChange;
    return () => {};
  }, [requestDataArrayChange, reviewDataArrayChange, modalType]);
  const getUserInfoAndSetState = useCallback(async () => {
    try {
      const { data } = await getUserInfo(id);
      imgChange(`${SERVER_URL}/image/${data.imagName}`);
      userNameChange(data.name);
      idChange(data.id);
      starChange(data.score);
    } catch (error) {}
  }, [id]);
  const recodeResponseToState = useCallback((response, index) => {
    return response.map(recode => ({
      id: index,
      text: recode.title,
    }));
  }, []);
  const getRecodeAndSetState = useCallback(async () => {
    try {
      const { data } = await getRecode(id);
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
    getUserInfoAndSetState();
    getAlarmAndSetState();
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
        modalId={modalId}
        modalIdChange={modalIdChange}
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
