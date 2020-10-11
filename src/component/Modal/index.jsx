import React from 'react';
import './style/index.css';
import { RequestApproveModal, ReviewModal } from './Mypage';

const Modal = ({ modalType, onDelete, data, dataChange }) => {
  return (
    <>
      {modalType.length > 0 ? (
        <div className="ModalBackground">
          {modalType === 'RequestApproveModal' && (
            <RequestApproveModal
              requestData={data}
              dataChange={dataChange}
              onDelete={onDelete}
            />
          )}
          {modalType === 'ReviewModal' && (
            <ReviewModal
              onDelete={onDelete}
              dataChange={dataChange}
              requestData={data}
            />
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
