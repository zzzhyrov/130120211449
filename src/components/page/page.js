import React from 'react';
import { connect } from 'react-redux';
import Profile from '../profile/profile';
import Reviews from '../reviews';
import styles from './page.module.css';

const Page = ({ manager }) => {
  const { id, likes, reviews } = manager;
  return (
    <div className={styles.pageBody}>
      <Profile activeManagerId={id} />
      <Reviews reviews={reviews} likes={likes} activeManagerId={id} />
    </div>
  );
};

export default connect((state, ownProps) => ({
  manager: state.managers[ownProps.id],
}))(Page);
