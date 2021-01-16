import React from 'react';

import styles from './review-form.module.css';

const ReviewForm = () => {
  return (
    <div className={styles.reviewFormContainer}>
      <form className={styles.reviewForm}>
        <div className={styles.reviewFormItem}>
          <textarea className={styles.message} />
        </div>
        <div>
          <button className={styles.submitButton}>Написать консультанту</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
