import React from 'react';
import Review from '../reviews/review';
import ReviewForm from '../reviews/review-form/';
// import {
//   normalizedManagers,
//   normalizedReviews,
//   normalizedUsers,
// } from '../../fixtures';

const Reviews = () => (
  <div>
    <h1>Reviews</h1>
    <Review />
    <ReviewForm />
  </div>
);

export default Reviews;
