import React from 'react';
import { useCallback } from 'react';
import * as S from '../style';
import CommentContent from '../Comment/CommentContent';

const AnotherComment = ({ comments }) => {
  const setComment = useCallback(comments => {
    return comments.map(comment => {
      return (
        <CommentContent
          text={comment.text}
          userName={comment.userName}
          star={comment.star}
        />
      );
    });
  }, []);
  return (
    <S.AnotherPersonComment>
      <S.Title>코멘트</S.Title>
      <div>{setComment(comments)}</div>
    </S.AnotherPersonComment>
  );
};

export default AnotherComment;
