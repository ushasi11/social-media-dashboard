import React from 'react';
import styles from './Profile.module.css';
import Card from '../common/Card/Card';

function Profile({ name, bio, following, followers, isDarkMode }) {
  return (
    <Card isDarkMode={isDarkMode}>
      <div className={styles.profile}>
        <div className={styles.avatar}></div>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.bio}>{bio}</p>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{following}</span>
            <span className={styles.statLabel}>Following</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{followers}</span>
            <span className={styles.statLabel}>Followers</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Profile;