import React from 'react';
import Profile from '../profile/profile';
import Reviews from '../reviews';
import styles from './page.module.css';
import { managers, reviews } from '../../fixtures';

const Page = () => (
  <div className={styles.pageBody}>
    <Profile manager={managers[0]} />
    <Reviews
      reviews={reviews}
      likes={managers[0].likes}
      reviewsQuantity={managers[0].reviews.length}
    />
  </div>
);

export default Page;
