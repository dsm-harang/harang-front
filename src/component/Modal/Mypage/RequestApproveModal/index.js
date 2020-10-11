import React, { useCallback } from 'react';
import RequestApproveModalContent from './RequestApproveModalContent';

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
    <div className="RequestModal Modal">
      <div>{setContent()}</div>
      <button
        className="RequestModalApproveButton"
        onClick={buttonClickHandler}
      >
        채팅방 추가하기
      </button>
    </div>
  );
};

export default RequestApproveModal;
