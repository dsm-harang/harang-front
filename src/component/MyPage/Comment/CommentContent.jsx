import React from 'react';
import * as S from '../style';
import CommentStar from './CommentStar';

const CommentContent = ({ userName, text, star }) => {
  return (
    <S.CommentContent>
      <S.CommentContentUserName>{userName}</S.CommentContentUserName>
      <CommentStar star={star} />
      <S.CommentContentText>{text}</S.CommentContentText>
    </S.CommentContent>
  );
};

export default CommentContent;
