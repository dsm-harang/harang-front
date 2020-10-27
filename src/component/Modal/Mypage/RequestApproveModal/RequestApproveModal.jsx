import React, { useCallback } from 'react';
import RequestApproveModalContent from './RequestApproveModalContent';
import * as S from '../../style';

const RequestApproveModal = ({ requestData, dataChange, onDelete }) => {
  const setPersonChecked = useCallback(
    checkedId => {
      return requestData.map(data => {
        const buffer = { ...data };
        if (buffer.id === checkedId) {
          buffer.isChecked = !buffer.isChecked;
        }
        return buffer;
      });
    },
    [requestData],
  );
  const setPersonCheckedAndChangeState = useCallback(
    checkedId => {
      const newPersonList = setPersonChecked(checkedId);
      dataChange(newPersonList);
    },
    [requestData],
  );
  const buttonClickHandler = useCallback(() => {
    onDelete();
  }, []);
  const setContent = useCallback(() => {
    return requestData.map(data => (
      <RequestApproveModalContent
        {...data}
        setPersonChecked={setPersonCheckedAndChangeState}
      />
    ));
  }, [requestData]);
  return (
    <S.RequestModal>
      <div>{setContent()}</div>
      <S.RequestModalApproveButton onClick={buttonClickHandler}>
        채팅방 추가하기
      </S.RequestModalApproveButton>
    </S.RequestModal>
  );
};

export default RequestApproveModal;
