import React, { useCallback } from 'react';
import ReviewModalStar from './ReviewModalStar';

const RequestApproveModalContent = ({
  name,
  id,
  star,
  src,
  starChange,
  deleteData,
}) => {
  const buttonClickHandler = useCallback(() => {
    deleteData(id);
  }, [id]);
  const starClickHandler = useCallback(
    star => {
      starChange(id, star);
    },
    [id],
  );
  return (
    <div className="board_content">
      <img className="board_userImg" src={src} />
      <p className="board_contentText">{name}</p>
      <ReviewModalStar star={star} starChange={starClickHandler} />
      <button className="review_button" onClick={buttonClickHandler}>
        별점주기
      </button>
    </div>
  );
};

export default RequestApproveModalContent;
