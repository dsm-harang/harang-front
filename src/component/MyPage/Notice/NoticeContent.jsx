import React from 'react';
import * as S from '../style';

const AlarmContent = ({ text, id, onClick }) => {
  return (
    <S.MypageContent>
      <S.MypageContentText>{text}</S.MypageContentText>
      <S.MypageSubmitButton onClick={onClick}>확인</S.MypageSubmitButton>
    </S.MypageContent>
  );
};

export default AlarmContent;
