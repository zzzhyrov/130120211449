import React from 'react';

const Review = ({ review }) => {
  const { id, text, date } = review;

  return (
    <div>
      <div>
        <h4>User: {id}</h4>
        <p>Date: {date}</p>
        <p>Text: {text}</p>
      </div>
    </div>
  );
};

export default Review;
