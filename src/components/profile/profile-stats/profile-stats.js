import React from 'react';
import { connect } from 'react-redux';
import styles from './profile-stats.module.css';

const ProfileStats = ({ services }) => {
  const { bookings, tours, hotels } = services;

  const totalServices = Object.values(services).reduce(
    (acc, subtotal) => acc + subtotal,
    0
  );

  const chartHeight = 100;

  const servicesCount = Object.values(services);

  const getColumnBody = () => {
    const maxValue = Math.max(...servicesCount);

    return servicesCount
      .map((item) => {
        const scale = chartHeight / maxValue;
        const percent = ((item / maxValue) * 100).toFixed(0);

        return `<div style="--value: ${Math.floor(
          item * scale
        )}" data-tooltip="${percent}%">${item}</div>`;
      })
      .join('');
  };

  return (
    <div className={styles.profileStatsBody}>
      <div>
        <div>
          <div>Ручное бронирование: </div>
          <div>{bookings}</div>
        </div>
        <div>
          <div>Пакетные туры: </div>
          <div>{tours}</div>
        </div>
        <div>
          <div>Отели: </div>
          <div>{hotels}</div>
        </div>
      </div>
      <div>
        <div>Всего: </div>
        <div>{totalServices}</div>
      </div>
      {getColumnBody(servicesCount)}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  services: state.managers[ownProps.id].services,
});

export default connect(mapStateToProps)(ProfileStats);
