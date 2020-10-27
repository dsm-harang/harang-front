import React from "react";

const starCounter = (score) => {
  const stars = [];
  const fullStars = parseInt(score / 1);
  const halfStars = score % 1 !== 0;
  const emptyStars = 5 - (halfStars + fullStars);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i className="fas fa-star"></i>);
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(<i className="fas fa-star-half-alt"></i>);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i className="far fa-star"></i>);
  }

  return stars;
};
export default starCounter;
