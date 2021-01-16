import React from 'react';
import Reviews from '../reviews';
import { reviews } from '../../fixtures';

const App = () => (
  <div>
    Manager's Profile
    <br />
    <Reviews reviews={reviews} />
  </div>
);

export default App;
