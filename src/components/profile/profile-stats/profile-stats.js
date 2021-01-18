import React from 'react';
import { connect } from 'react-redux';
import styles from './profile-stats.module.css';

const ProfileStats = ({ services }) => {
  const { bookings, tours, hotels } = services;

  const totalServices = Object.values(services).reduce(
    (acc, subtotal) => acc + subtotal,
    0
  );

  return (
    <div className={styles.profileStatsBody}>
      <div>
        <div className={styles.services_common}>Услуг</div>
        <div className={styles.profileStatsBody__services}>
          <div className={styles.service_bookings}>Ручное бронирование</div>
          <div className={styles.services_quantity}>{bookings}</div>
        </div>
        <div className={styles.profileStatsBody__services}>
          <div className={styles.service_tours}>Пакетные туры</div>
          <div className={styles.services_quantity}>{tours}</div>
        </div>
        <div className={styles.profileStatsBody__services}>
          <div className={styles.service_hotels}>Отели</div>
          <div className={styles.services_quantity}>{hotels}</div>
        </div>
      </div>
      <div className={styles.services_total}>
        <div className={styles.services_totalQuantity}>Всего</div>
        <div className={styles.services_totalQuantity}>{totalServices}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  services: state.managers[ownProps.id].services,
});

export default connect(mapStateToProps)(ProfileStats);
