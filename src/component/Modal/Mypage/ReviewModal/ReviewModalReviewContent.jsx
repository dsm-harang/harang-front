import React, { useCallback } from 'react';
import * as S from '../../style';
import ReviewModalStar from './ReviewModalStar';

const ReviewModalReviewContent = ({
  review,
  star,
  starChange,
  id,
  reviewChange,
  name,
  img,
  isAble,
  submitReview,
}) => {
  const textareaChangeHandler = useCallback(
    event => {
      const value = event.target.value;
      reviewChange(value);
    },
    [reviewChange],
  );
  const buttonClickHandler = useCallback(() => {
    submitReview();
  }, []);
  return (
    <S.ReviewModalContent isAble={isAble}>
      <div className="wrapper">
        <S.ReviewModalContentImg src={img} />
        <div>
          <S.ReviewModalContentName>{name}</S.ReviewModalContentName>
          <ReviewModalStar star={star} starChange={starChange} />
        </div>
      </div>
      <S.ReviewModalContentTextArea
        value={review}
        onChange={textareaChangeHandler}
      />
      <S.ReviewModalButton onClick={buttonClickHandler}>
        리뷰 남기기
      </S.ReviewModalButton>
    </S.ReviewModalContent>
  );
};

export default ReviewModalReviewContent;
