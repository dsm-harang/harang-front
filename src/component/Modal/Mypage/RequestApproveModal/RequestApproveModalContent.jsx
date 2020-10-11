import React, { useCallback } from 'react';
import RequestStar from './RequestStar';

const RequestApproveModalContent = ({
  name,
  id,
  src,
  star,
  setPersonChecked,
}) => {
  const inputChangeHandler = useCallback(() => {
    setPersonChecked(id);
  }, [id]);
  return (
    <div className="board_content">
      <img className="board_userImg" src={src} />
      <p className="board_contentText">{name}</p>
      <RequestStar star={star} />
      <label>
        <input type="checkbox" onChange={inputChangeHandler} />
        <div />
      </label>
    </div>
  );
};

export default RequestApproveModalContent;
