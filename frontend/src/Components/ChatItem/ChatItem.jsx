import React from 'react';
import styles from './ChatItem.module.css';

const ChatItem = ({chat}) => {
  return (
    <div classname={`${styles.ChatItemMainContainer}`}>
        <p className={`${styles.ChatIcon}`}>{chat.name[0]}</p>
        <p className={`${styles.ChatTitle}`}>{chat.name}</p>
        <p className={`${styles.timeMessage}`}>{chat.lastMessage}</p>
        <p className={`${styles.lastMessage}`}>{chat.timeStamp}</p>
    </div>
  )
}

export default ChatItem
