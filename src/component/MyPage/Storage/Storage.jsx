import React, { useCallback } from 'react';
import StorageContent from './StorageContent';
import * as S from '../style';

const Storage = ({ storageContentArray, modalOn }) => {
  const buttonClickHandler = useCallback(() => {
    modalOn();
  }, []);
  const createStorageContent = useCallback(storageContentArray => {
    return storageContentArray.map(({ text, id }) => (
      <StorageContent
        text={text}
        id={id}
        onClick={buttonClickHandler}
        key={text + id}
      />
    ));
  }, []);
  return (
    <S.MypageStoargeWrapper>
      <S.Storage>
        <p>기록</p>
        <div>{createStorageContent(storageContentArray)}</div>
      </S.Storage>
    </S.MypageStoargeWrapper>
  );
};

export default Storage;
