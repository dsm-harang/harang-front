import React from 'react';
import * as S from '../../style';

const ProfileUserImg = ({ img, imgChange }) => {
  const inputChangeHandler = event => {
    imgChange(event.target.value);
  };
  return (
    <div>
      <S.MypageImg src={img} alt="유저 프로필 사진" />
      <S.inputFile type="file" onChange={inputChangeHandler} />
    </div>
  );
};

export default ProfileUserImg;
