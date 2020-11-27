import React, { useCallback } from 'react';
import RequestApproveModalContent from './RequestApproveModalContent';
import * as S from '../../style';

const RequestApproveModal = ({
  requestData,
  dataChange,
  onDelete,
  modalId,
  modalIdChange,
  requestFunction,
}) => {
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
    Promise.all(approveUsers(requestData)).then(() => {
      onDelete(modalId);
      modalIdChange(-1);
    });
  }, [requestData]);
  const setContent = useCallback(() => {
    return requestData.map(data => (
      <RequestApproveModalContent
        {...data}
        setPersonChecked={setPersonCheckedAndChangeState}
      />
    ));
  }, [requestData]);
  const approveUsers = members =>
    members.map(member => requestFunction(member.id));
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
