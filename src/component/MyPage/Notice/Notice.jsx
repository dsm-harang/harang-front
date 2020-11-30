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
    return noticeContentArray.map(({ text, id, type, postId, notifyId }) => (
      <NoticeContent
        text={text}
        id={id}
        onClick={() =>
          buttonClickHandler(
            notifyId,
            type,
            requestModalOn,
            reviewModalOn,
            postId,
          )
        }
        key={text + notifyId}
      />
    ));
  }, []);
  const buttonClickHandler = useCallback(
    (id, type, requestModalOn, reviewModalOn, postId) => {
      if (type === 'Post') {
        modalIdChange(id);
        reviewModalOn(postId);
      } else if (type === 'APPLY') {
        modalIdChange(id);
        requestModalOn(postId);
      }
    },
    [],
  );
  return (
    <S.MypageNoticeWrapper>
      <S.Notice>
        <div>{createNoticeContentArray(noticeContentArray)}</div>
      </S.Notice>
      <S.CalenderButton>
        <S.CalenderIconImg />
        <p>내 일정 확인하기</p>
      </S.CalenderButton>
    </S.MypageNoticeWrapper>
  );
};

export default Notice;
