import React from 'react';
import { useCallback } from 'react';

const ReviewModalStar = ({ star, starChange }) => {
  const setStar = useCallback(() => {
    let buffer = [];
    for (let i = 0; i < star; i++) {
      buffer = [
        ...buffer,
        <div className="full-star" onClick={() => starChange(i + 1)} />,
      ];
    }
    for (let i = star; i < 5; i++) {
      buffer = [
        ...buffer,
        <div className="empty-star" onClick={() => starChange(i + 1)} />,
      ];
    }
    return buffer;
  }, [star]);
  return <div className="request-star-wrapper">{setStar()}</div>;
};

export default ReviewModalStar;
