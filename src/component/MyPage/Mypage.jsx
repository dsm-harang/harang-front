import React, { useCallback, useState, useEffect } from 'react';
import Profile from './Profile';
import Notice from './Notice';
import Storage from './Storage';
import Modal from '../Modal';
import Comment from './Comment';
import './style/index.css';
import * as S from './style';

const Mypage = () => {
  const [noticeArray, noticeArrayChange] = useState([
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
    { text: '무엇무엇동아리에 누군가가 신청 왔습니다.', id: 1 },
  ]);
  const [storageArray, storageArrayChange] = useState([
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
    { text: '무슨무슨무슨무슨무슨무슨무슨무슨무슨무슨 체험 참여.', id: 1 },
  ]);
  const [img, imgChange] = useState(
    'https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png',
  );
  const [requestDataArray, requestDataArrayChange] = useState([
    { name: '오준상', src: '', star: 4, isChecked: false, id: 1 },
  ]);
  const [userName, userNameChange] = useState('누군가');
  const [description, descriptionChange] = useState(
    '제 이름은 누군가입니다. 누굴까요 ㅋㅋㄹㅃㅃ',
  );
  const [comments, commentsChange] = useState([
    {
      text: '댓그으을',
      userName: '오준상',
      star: 5,
    },
    {
      text: '댓그으을',
      userName: '오준상',
      star: 5,
    },
    {
      text: '댓그으을',
      userName: '오준상',
      star: 5,
    },
    {
      text: '댓그으을',
      userName: '오준상',
      star: 5,
    },
    {
      text: '댓그으을',
      userName: '오준상',
      star: 5,
    },
    {
      text: '댓그으을',
      userName: '오준상',
      star: 5,
    },
    {
      text: '댓그으을',
      userName: '오준상',
      star: 5,
    },
  ]);
  const [reviewDataArray, reviewDataArrayChange] = useState([
    { name: '오준상', src: '', star: 0, id: 1 },
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
  const setModalData = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArray;
    if (modalType === 'ReviewModal') return reviewDataArray;
    return [];
  }, [requestDataArray, reviewDataArray, modalType]);
  const setModalDataChangeFunction = useCallback(() => {
    if (modalType === 'RequestApproveModal') return requestDataArrayChange;
    if (modalType === 'ReviewModal') return reviewDataArrayChange;
    return () => {};
  }, [requestDataArrayChange, reviewDataArrayChange, modalType]);
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
            />
            <Storage
              storageContentArray={storageArray}
              modalOn={setModalReviewModal}
            />
          </div>
          <Notice
            noticeContentArray={noticeArray}
            modalOn={setModalRequestModal}
          />
        </div>
        <div>
          <Comment comments={comments} />
        </div>
      </S.MypageDiv>
    </>
  );
};

export default Mypage;
