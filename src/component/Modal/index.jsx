import React, { useCallback } from 'react';
import { RequestApproveModal, ReviewModal, ReportModal } from './Mypage';
import ModalDeleteButton from './ModalDeleteButton';
import * as S from './style';

const Modal = ({
  modalType,
  onDelete,
  data,
  dataChange,
  modalId,
  modalIdChange,
}) => {
  const eventPreventHandler = useCallback(e => {
    e.stopPropagation();
  }, []);
  return (
    <>
      {modalType.length > 0 ? (
        <S.ModalBackground onClick={onDelete}>
          <div onClick={eventPreventHandler}>
            <ModalDeleteButton onDelete={onDelete} />
            {modalType === 'RequestApproveModal' && (
              <RequestApproveModal
                requestData={data}
                dataChange={dataChange}
                onDelete={onDelete}
                modalId={modalId}
                modalIdChange={modalIdChange}
              />
            )}
            {modalType === 'ReviewModal' && (
              <ReviewModal
                requestData={data}
                dataChange={dataChange}
                onDelete={onDelete}
                modalId={modalId}
                modalIdChange={modalIdChange}

                requestFunction={requestFunction}
              />
            )}
            {modalType === 'ReportModal' && (
              <ReportModal
                requestFunction={requestFunction}
                data={data}
                onDelete={onDelete}
              />
            )}
            {modalType === 'ReportModal' && <ReportModal />}
          </div>
        </S.ModalBackground>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
