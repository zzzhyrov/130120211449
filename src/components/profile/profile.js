import React from 'react';
import styles from './profile.module.css';
import ProfileDescription from './profile-description';

const Profile = ({ manager }) => {
  return (
    <div className={styles.profileBody}>
      <ProfileDescription manager={manager} />
    </div>
  );
};

export default Profile;
