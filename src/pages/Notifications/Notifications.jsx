import React from 'react';
import Notification from '../../components/Notification/Notification';
import Card from '../../components/common/Card/Card';

function Notifications() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Card>
        <h2 style={{ marginTop: 0 }}>All Notifications</h2>
        <Notification type="like" message="Alex liked your post." time="10m ago" />
        <Notification type="follow" message="Sarah started following you." time="1h ago" />
        <Notification type="comment" message="New comment on your dashboard." time="2h ago" />
      </Card>
    </div>
  );
}

export default Notifications;