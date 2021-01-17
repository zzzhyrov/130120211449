import React from 'react';
import styles from './profile-stats.module.css';

const ProfileStats = ({ manager }) => {
  const { bookings, tours, hotels } = manager.services;

  const totalServices = Object.values(manager.services).reduce(
    (acc, subtotal) => acc + subtotal,
    0
  );

  const chartHeight = 100;

  const services = Object.values(manager.services);

  const getColumnBody = () => {
    const maxValue = Math.max(...services);

    return services
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
    <div>
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
      {getColumnBody(services)}
    </div>
  );
};

export default ProfileStats;
