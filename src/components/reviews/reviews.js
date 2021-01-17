import React from 'react';
import Review from '../reviews/review';
import ReviewForm from '../reviews/review-form/';
import styles from './reviews.module.css';

import { ReactComponent as ReviewsIcon } from './icons/reviews.svg';
import { ReactComponent as LikeIcon } from './icons/like.svg';

const Reviews = ({ reviews, likes, activeManagerId }) => {
  const renderReviewsQuantity = 3;
  const limitRenderReviewsQuantity = reviews.slice(0, renderReviewsQuantity);

  return (
    <div className={styles.reviewsBody}>
      <div className={styles.reviewsHeader}>
        <div className={styles.reviewsHeaderItem}>
          <div className={styles.reviewsHeaderItem}>
            <a href="#" className={styles.sortReviewsHandler}>
              Последние отзывы
            </a>
          </div>
          <div className={styles.reviewsHeaderItem}>
            <a href="#" className={styles.sortReviewsHandler}>
              Все отзывы
            </a>
          </div>
        </div>
        <div className={styles.reviewsHeaderItem}>
          <div className={styles.reviewsHeaderItem}>
            <LikeIcon className={styles.icon} />
            <div>{likes}</div>
          </div>
          <div className={styles.reviewsHeaderItem}>
            <ReviewsIcon className={styles.icon} />
            <div>{reviews.length}</div>
          </div>
        </div>
      </div>

      {limitRenderReviewsQuantity.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm id={activeManagerId} />
    </div>
  );
};

export default Reviews;
