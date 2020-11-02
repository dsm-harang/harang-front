import React, { useCallback } from 'react';
import NoticeContent from './NoticeContent';
import * as S from '../style';

const Notice = ({
  noticeContentArray,
  requestModalOn,
  reviewModalOn,
  modalIdChange,
}) => {
  const createNoticeContentArray = useCallback(noticeContentArray => {
    return noticeContentArray.map(({ text, id, type }) => (
      <NoticeContent
        text={text}
        id={id}
        onClick={() =>
          buttonClickHandler(id, type, requestModalOn, reviewModalOn)
        }
        key={text + id}
      />
    ));
  }, []);
  const buttonClickHandler = useCallback(
    (id, type, requestModalOn, reviewModalOn) => {
      type === 'review' ? reviewModalOn() : requestModalOn();
      if (type === 'review') {
        modalIdChange(id);
        reviewModalOn();
      } else if (type === 'request') {
        modalIdChange(id);
        requestModalOn();
      } else {
      }
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
