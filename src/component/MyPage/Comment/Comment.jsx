import React from 'react';
import { useCallback } from 'react';
import * as S from '../style';
import CommentContent from './CommentContent';

const Comment = ({ comments }) => {
  const setComment = useCallback(comments => {
    return comments.map(comment => {
      return (
        <CommentContent
          text={comment.text}
          userName={comment.userName}
          star={comment.star}
          key={`${comment.userName}${comment.text}`}
        />
      );
    });
  }, []);
  return (
    <S.Comment>
      <S.Title>코멘트</S.Title>
      <div>{setComment(comments)}</div>
    </S.Comment>
  );
};

export default Comment;
