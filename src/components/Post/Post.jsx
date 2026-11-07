import React, { useState } from 'react';
import styles from './Post.module.css';
import Card from '../common/Card/Card';
import Button from '../common/Button/Button';

function Post({ author, time, content, initialLikes, isDarkMode }) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card isDarkMode={isDarkMode}>
      <div className={styles.postHeader}>
        <div className={styles.avatar}></div>
        <div>
          <h3 className={styles.authorName}>{author}</h3>
          <p className={styles.time}>{time}</p>
        </div>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.actions}>
        <Button onClick={handleLike}>
          {isLiked ? '❤️ Liked' : '🤍 Like'} {likes}
        </Button>
        <Button onClick={() => alert('Comments coming soon!')}>
          💬 Comment
        </Button>
      </div>
    </Card>
  );
}

export default Post;