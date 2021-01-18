import React from 'react';
import { connect } from 'react-redux';
import styles from './profile-description.module.css';

const ProfileDescription = ({ name, position, description }) => {
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

const mapStateToProps = (state, ownProps) => ({
  name: state.managers[ownProps.id].name,
  position: state.managers[ownProps.id].position,
  description: state.managers[ownProps.id].description,
});

export default connect(mapStateToProps)(ProfileDescription);
