import React from 'react';
import * as S from './style';

const ModalDeleteButton = ({ onDelete }) => {
  return (
    <S.ModalDeleteWrapper>
      <S.ModalDelete onClick={onDelete}>
        <div />
      </S.ModalDelete>
    </S.ModalDeleteWrapper>
  );
};

export default ModalDeleteButton;
