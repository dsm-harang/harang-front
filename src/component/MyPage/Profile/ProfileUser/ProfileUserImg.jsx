import React, { useCallback } from 'react';
import * as S from '../../style';
import ImgAdd from './ImgAdd';

const ProfileUserImg = ({ img, imgChange, isMine, setUserInfo }) => {
  const inputChangeHandler = event => {
    const file = event.target.files[0];
    const body = new FormData();
    body.set('image', file);
    body.set('intro', 'test');
    const fileUrl = fileToStringUrl(file);
    imgChange(fileUrl);
    setUserInfo(body);
  };
  const fileToStringUrl = useCallback(file => {
    return URL.createObjectURL(file);
  }, []);
  return (
    <S.MypageUserImg>
      <S.MypageImg src={img} alt="유저 프로필 사진" />
      {isMine ? (
        <label>
          <ImgAdd />
          <S.inputFile type="file" onChange={inputChangeHandler} />
        </label>
      ) : (
        ''
      )}
    </S.MypageUserImg>
  );
};

export default ProfileUserImg;
