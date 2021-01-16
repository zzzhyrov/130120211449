import React from 'react';
import Profile from '../profile/profile';
import Reviews from '../reviews';
import styles from './app.module.css';
import { managers, reviews } from '../../fixtures';

const App = () => (
  <div className={styles.appBody}>
    <Profile manager={managers[0]} />
    <Reviews
      reviews={reviews}
      likes={managers[0].likes}
      reviewsQuantity={managers[0].reviews.length}
    />
  </div>
);

export default App;
