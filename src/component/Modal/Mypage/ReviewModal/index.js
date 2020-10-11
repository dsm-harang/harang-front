import React, { useCallback } from 'react';
import '../../style/index.css';
import ReviewModalContent from './ReviewModalContent';

const ReviewModal = ({ requestData, dataChange, onDelete }) => {
  const getStarChangedDataList = useCallback(
    (id, star) => {
      return requestData.map(data => {
        const buffer = { ...data };
        if (buffer.id === id) {
          buffer.star = star;
        }
        return buffer;
      });
    },
    [requestData],
  );
  const buttonClickHandler = useCallback(() => {
    onDelete();
  }, []);
  const getDeleteDataList = useCallback(id => {
    return requestData.filter(data => data.id !== id);
  });
  const setStarChangedDataListToState = useCallback(
    (id, star) => {
      const buffer = getStarChangedDataList(id, star);
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
  const setContent = useCallback(() => {
    return requestData.map(data => (
      <ReviewModalContent
        {...data}
        dataChange={dataChange}
        deleteData={setDeleteDataListToState}
        starChange={setStarChangedDataListToState}
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
        리뷰 마치기
      </button>
    </div>
  );
};

export default ReviewModal;
