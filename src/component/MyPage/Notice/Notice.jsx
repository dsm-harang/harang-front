import React, { useCallback } from 'react';
import NoticeContent from './NoticeContent';
import * as S from '../style';

const Notice = ({ noticeContentArray, modalOn }) => {
  const createNoticeContentArray = useCallback(noticeContentArray => {
    return noticeContentArray.map(({ text, id }) => (
      <NoticeContent
        text={text}
        id={id}
        onClick={buttonClickHandler}
        key={text + id}
      />
    ));
  }, []);
  const buttonClickHandler = useCallback(() => {
    modalOn();
  }, []);
  return (
    <S.MypageNoticeWrapper>
      <S.Notice>{createNoticeContentArray(noticeContentArray)}</S.Notice>
      <S.CalenderButton>
        <S.CalenderIconImg />
        <p>내 일정 확인하기</p>
      </S.CalenderButton>
    </S.MypageNoticeWrapper>
  );
};

export default Notice;
