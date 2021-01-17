import React from 'react';
import styles from './profile.module.css';
import ProfileDescription from './profile-description';
import ProfileStats from './profile-stats';

const Profile = ({ manager }) => {
  return (
    <div className={styles.profileBody}>
      <ProfileDescription manager={manager} />
      {/* <ProfileStats manager={manager} /> */}
    </div>
  );
};

export default Profile;
