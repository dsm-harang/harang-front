import React, { useCallback, useState } from 'react';
import { setComment } from '../../../../lib/api/Mypage';
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
  const getScoreRequestBody = useCallback(
    (targetId, userId, comment, star) => ({
      member_id: targetId,
      user_id: userId,
      score: star,
      score_content: comment,
    }),
    [],
  );
  const setCommentAndGetStatus = useCallback(
    async (targetId, comment, star) => {
      const request = getScoreRequestBody(targetId, id, comment, star);
      try {
        const { status } = await setComment(id, request);
        return status;
      } catch (error) {
        return error;
      }
    },
    [id],
  );
  const submitReview = useCallback(() => {
    deleteData(id);
    deleteModal();
    setCommentAndGetStatus(id, review, star);
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
