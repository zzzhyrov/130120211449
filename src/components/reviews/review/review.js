import React from 'react';
import { connect } from 'react-redux';
import styles from './review.module.css';

const Review = ({ review, userName }) => {
  const { text, date } = review;

  return (
    <div>
      <div className={styles.reviewInfoContainer}>
        <div className={styles.reviewInfoName}>{userName}</div>
        <div className={styles.reviewInfoDate}>{date}</div>
      </div>
      <div className={styles.reviewAreaContainer}>
        <div className={styles.reviewArea}>{text}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const review = state.reviews[ownProps.id];
  const userId = review.userId;
  const userName = state.users[userId].name;

  return {
    review,
    userName,
  };
};

export default connect(mapStateToProps)(Review);
