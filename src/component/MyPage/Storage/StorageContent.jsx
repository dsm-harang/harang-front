import React from 'react';
import * as S from '../style';
const StorageContent = ({ text, id, onClick }) => {
  console.log(text);
  return (
    <S.MypageContent>
      <S.MypageStoargeContent>{text}</S.MypageStoargeContent>
    </S.MypageContent>
  );
};

export default StorageContent;
