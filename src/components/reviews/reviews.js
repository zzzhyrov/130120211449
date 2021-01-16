import React from 'react';
import Review from '../reviews/review';
import ReviewForm from '../reviews/review-form/';

const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <ReviewForm />
    </div>
  );
};

export default Reviews;
