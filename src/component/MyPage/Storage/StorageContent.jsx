import React from 'react';
import * as S from '../style';
const StorageContent = ({ text, id, onClick }) => {
  return (
    <S.MypageContent>
      <S.MypageStoargeContent>{text}</S.MypageStoargeContent>
    </S.MypageContent>
  );
};

export default StorageContent;
