import React from 'react';

import styles from './review-form.module.css';

const ReviewForm = () => {
  return (
    <div className={styles.reviewFormContainer}>
      <form className={styles.reviewForm}>
        <textarea
          className={styles.message}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter' && ev.ctrlKey) {
              console.log('Ctrl + Enter pressed');
            }
          }}
        />
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log('Submit button clicked!');
            }}
            className={styles.submitButton}
          >
            Написать консультанту
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
