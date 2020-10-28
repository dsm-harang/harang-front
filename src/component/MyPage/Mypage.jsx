import React, { useCallback, useState } from 'react';
import Profile from './Profile';
import Notice from './Notice';
import Storage from './Storage';
import Modal from '../Modal';
import Comment from './Comment';
import AnotherComment from './AnotherCommnet';
import * as S from './style';
import { useEffect } from 'react';

const MODAL_TYPE_REVIEW = 'review';
const MODAL_TYPE_REQUEST = 'request';
const DEFAULT_USER_IMG =
  'https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png';
const Mypage = () => {
  const [isMine, isMineChange] = useState(true);
  const [noticeArray, noticeArrayChange] = useState([
    {
      text: '어떤어떤 체험의 리뷰를 작성해 주세요.',
      id: 1,
      type: MODAL_TYPE_REVIEW,
    },
    {
      text: '무엇무엇동아리에 신청 왔습니다.',
      id: 1,
      type: MODAL_TYPE_REQUEST,
    },
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
    { name: '오준상', src: DEFAULT_USER_IMG, star: 1, id: 1, review: '1' },
  ]);
  const [modalType, modalTypeChange] = useState('');
  const modalDelete = () => {
    modalTypeChange('');
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
    console.log(modalType);
    if (modalType === 'RequestApproveModal') return requestDataArray;
    else if (modalType === 'ReviewModal') {
      console.log(reviewDataArray[0]);
      return reviewDataArray;
    }
    return [];
  }, [requestDataArray, reviewDataArray, modalType]);
  const setModalDataChangeFunction = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArrayChange;
    if (modalType === 'ReviewModal') return reviewDataArrayChange;
    return () => {};
  }, [requestDataArrayChange, reviewDataArrayChange, modalType]);
  const renderNoticeComponent = useCallback(
    isMine => {
      if (isMine) {
        return (
          <Notice
            noticeContentArray={noticeArray}
            requestModalOn={setModalRequestModal}
            reviewModalOn={setModalReviewModal}
          />
        );
      }
      return <AnotherComment comments={comments} />;
    },
    [storageArray, setModalReviewModal],
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
  return (
    <>
      <Modal
        modalType={modalType}
        onDelete={modalDelete}
        data={setModalData()}
        dataChange={setModalDataChangeFunction()}
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
