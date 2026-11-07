import React from 'react';
import styles from './Button.module.css';

function Button({ children, onClick, type = 'primary' }) {
  return (
    <button 
      className={`${styles.button} ${styles[type]}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;