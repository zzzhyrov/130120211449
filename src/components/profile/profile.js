import React from 'react';
import styles from './profile.module.css';
import ProfileDescription from './profile-description';
import ProfileStats from './profile-stats';

const Profile = ({ activeManagerId }) => {
  return (
    <div className={styles.profileBody}>
      <ProfileDescription id={activeManagerId} />
      <ProfileStats id={activeManagerId} />
    </div>
  );
};

export default Profile;
