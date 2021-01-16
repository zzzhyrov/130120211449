import React from 'react';
import Reviews from '../reviews';
import { managers, reviews } from '../../fixtures';

const App = () => (
  <div>
    Manager's Profile
    <br />
    <Reviews
      reviews={reviews}
      likes={managers[0].likes}
      reviewsQuantity={managers[0].reviews.length}
    />
  </div>
);

export default App;
