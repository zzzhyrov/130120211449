import React from 'react';
import styles from './profile-description.module.css';

const ProfileDescription = ({ manager }) => {
  const { name, position, description } = manager;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profilePhoto}></div>
      <div className={styles.profileData}>
        <div className={styles.profileDataGeneral}>
          <div className={styles.profileDataGeneral__name}>{name}</div>
          <div className={styles.profileDataGeneral__jobPosition}>
            {position}
          </div>
        </div>
        <div className={styles.profileDataGeneral__description}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProfileDescription;
