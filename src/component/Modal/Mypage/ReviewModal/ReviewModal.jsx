import React, { useCallback, useEffect } from 'react';
import ReviewModalContent from './ReviewModalContent';
import * as S from '../../style';

const ReviewModal = ({
  requestData,
  dataChange,
  onDelete,
  modalId,
  modalIdChange,
  requestFunction,
}) => {
  const getStarChangedDataList = useCallback((requestData, id, star) => {
    return requestData.map(data => {
      const buffer = { ...data };
      if (buffer.id === id) {
        buffer.star = star;
      }
      return buffer;
    });
  }, []);
  const getReviewChangedDataList = useCallback((requestData, id, review) => {
    return requestData.map(data => {
      const buffer = { ...data };
      if (buffer.id === id) {
        buffer.review = review;
      }
      return buffer;
    });
  }, []);
  const buttonClickHandler = useCallback(() => {
    onDelete(modalId);
    modalIdChange(-1);
  }, []);
  const getDeleteDataList = useCallback(id => {
    return requestData.filter(data => data.id !== id);
  });
  const setStarChangedDataListToState = useCallback(
    (id, star) => {
      const buffer = getStarChangedDataList(requestData, id, star);
      dataChange(buffer);
    },
    [requestData, dataChange],
  );
  const setReviewChangeDataListToState = useCallback(
    (id, review) => {
      const buffer = getReviewChangedDataList(requestData, id, review);
      dataChange(buffer);
    },
    [requestData, dataChange],
  );
  const setDeleteDataListToState = useCallback(
    id => {
      const buffer = getDeleteDataList(id);
      dataChange(buffer);
    },
    [requestData, dataChange],
  );
  const setContent = useCallback(
    requestData => {
      return requestData.map(data => (
        <ReviewModalContent
          {...data}
          key={data.id}
          deleteData={setDeleteDataListToState}
          starChange={setStarChangedDataListToState}
          reviewChange={setReviewChangeDataListToState}
          requestFunction={requestFunction}
        />
      ));
    },
    [
      setStarChangedDataListToState,
      setReviewChangeDataListToState,
      setDeleteDataListToState,
    ],
  );
  return (
    <S.ReviewModal>
      <div>{setContent(requestData)}</div>
      <S.RequestModalApproveButton onClick={buttonClickHandler}>
        리뷰 마치기
      </S.RequestModalApproveButton>
    </S.ReviewModal>
  );
};

export default ReviewModal;
