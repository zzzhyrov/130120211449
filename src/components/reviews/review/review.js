import React from 'react';
import styles from './review.module.css';

const Review = ({ review }) => {
  const { id, text, date } = review;

  return (
    <div>
      <div className={styles.reviewInfoContainer}>
        <div className={styles.reviewInfoName}>
          <b>{id}</b>
        </div>
        <div className={styles.reviewInfoDate}>{date}</div>
      </div>
      <div className={styles.reviewAreaContainer}>
        <div className={styles.reviewArea}>{text}</div>
      </div>
    </div>
  );
};

export default Review;
