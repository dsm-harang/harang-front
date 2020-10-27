import React, { useCallback } from 'react';
import NoticeContent from './NoticeContent';
import * as S from '../style';

const Notice = ({ noticeContentArray, requestModalOn, reviewModalOn }) => {
  const createNoticeContentArray = useCallback(noticeContentArray => {
    return noticeContentArray.map(({ text, id, type }) => (
      <NoticeContent
        text={text}
        id={id}
        onClick={() => buttonClickHandler(type, requestModalOn, reviewModalOn)}
        key={text + id}
      />
    ));
  }, []);
  const buttonClickHandler = useCallback(
    (type, requestModalOn, reviewModalOn) => {
      type === 'review' ? reviewModalOn() : requestModalOn();
    },
    [],
  );
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
