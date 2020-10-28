import React, { useCallback, useState } from 'react';
import Star from '../../../Default/Star';
import * as S from '../../style';
import ReviewModalReviewContent from './ReviewModalReviewContent';

const RequestApproveModalContent = ({
  name,
  id,
  star,
  src,
  starChange,
  deleteData,
  review,
  reviewChange,
}) => {
  const [isReviewModalOn, modalOnChange] = useState(false);
  const clickStarWithId = useCallback(
    star => {
      starChange(id, star);
    },
    [id, starChange],
  );
  const deleteModal = useCallback(() => {
    modalOnChange(false);
  }, []);
  const onModal = useCallback(() => {
    modalOnChange(true);
  }, []);
  const reviewChangeWithId = useCallback(
    review => {
      reviewChange(id, review);
    },
    [id, reviewChange],
  );
  const submitReview = useCallback(() => {
    deleteModal();
  }, []);
  return (
    <>
      <ReviewModalReviewContent
        star={star}
        starChange={clickStarWithId}
        name={name}
        id={id}
        img={src}
        review={review}
        reviewChange={reviewChangeWithId}
        isAble={isReviewModalOn}
        submitReview={submitReview}
      />

      <S.BoardContent>
        <S.BoardUserImg src={src} />
        <S.BoardContentText>{name}</S.BoardContentText>
        <Star star={star} />
        <S.ReviewButton onClick={onModal}>코멘트 작성</S.ReviewButton>
      </S.BoardContent>
    </>
  );
};

export default RequestApproveModalContent;
