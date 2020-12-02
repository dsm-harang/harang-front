import React from 'react';
import * as S from '../style';
import Star from '../../Default/Star';

const CommentContent = ({ userName, text, star }) => {
  return (
    <S.CommentContent>
      <S.CommentNameAndStarWrapper>
        <S.CommentContentUserName>{userName}</S.CommentContentUserName>
        <Star star={star} />
      </S.CommentNameAndStarWrapper>
      <S.CommentContentText>{text}</S.CommentContentText>
    </S.CommentContent>
  );
};

export default CommentContent;
