import React from 'react';
import styles from './Notification.module.css';

function Notification({ type, message, time }) {
  const getIcon = () => {
    if (type === 'like') return '❤️';
    if (type === 'follow') return '👤';
    if (type === 'comment') return '💬';
    return '🔔';
  };

  return (
    <div className={styles.notification}>
      <span className={styles.icon}>{getIcon()}</span>
      <div className={styles.content}>
        <p className={styles.message}>{message}</p>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
}

export default Notification;