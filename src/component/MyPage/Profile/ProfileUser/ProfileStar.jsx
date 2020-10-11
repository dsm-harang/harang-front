import React, { useCallback } from 'react';
import * as S from '../../style';

const ProfileStar = ({ star }) => {
  const setStar = useCallback(() => {
    let buffer = [];
    for (let i = 1; i <= star; i++) {
      buffer = [...buffer, <S.FullStar />];
    }
    for (let i = star; i < 5; i++) {
      buffer = [...buffer, <S.EmptyStar />];
    }
    return buffer;
  }, [star]);
  return <S.StarWrapper>{setStar()}</S.StarWrapper>;
};

export default ProfileStar;
