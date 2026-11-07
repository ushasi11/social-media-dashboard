import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className={styles.header}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className={styles.logo}>SocialDash</h1>
      </Link>
      <nav className={styles.nav}>
        <button 
          onClick={toggleTheme} 
          style={{ cursor: 'pointer', padding: '8px', borderRadius: '50%', border: 'none', background: 'transparent', fontSize: '20px' }}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <Link to="/" style={{ textDecoration: 'none', color: '#14171a', fontWeight: 'bold' }}>Home</Link>
        <Link to="/notifications" style={{ textDecoration: 'none', color: '#14171a', fontWeight: 'bold' }}>Notifications</Link>
        <Link to="/profile" style={{ textDecoration: 'none', backgroundColor: '#1DA1F2', color: 'white', padding: '8px 16px', borderRadius: '6px', fontWeight: '600' }}>Profile</Link>
      </nav>
    </header>
  );
}

export default Header;