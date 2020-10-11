import React, { useEffect } from 'react';
import { useCallback } from 'react';

const RequestStar = ({ star }) => {
  const setStar = useCallback(() => {
    let buffer = [];
    for (let i = 1; i <= star; i++) {
      buffer = [...buffer, <div className="full-star" />];
    }
    for (let i = star; i < 5; i++) {
      buffer = [...buffer, <div className="empty-star" />];
    }
    return buffer;
  }, [star]);
  return <div className="request-star-wrapper">{setStar()}</div>;
};

export default RequestStar;
