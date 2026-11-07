import React from 'react';
import Post from '../../components/Post/Post';
import Profile from '../../components/Profile/Profile';
import Notification from '../../components/Notification/Notification';
import Card from '../../components/common/Card/Card';

function Home({ isDarkMode }) {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', maxWidth: '1200px', margin: '0 auto', alignItems: 'flex-start' }}>
      
      {/* Left Sidebar */}
      <div style={{ flex: '1' }}>
        <Profile 
          name="Ushasi Bag" 
          bio="Web Development Intern @ The Developers Arena | React Enthusiast" 
          following="128" 
          followers="342"
          isDarkMode={isDarkMode} 
        />
      </div>
      
      {/* Main Feed Area */}
      <div style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Post 
          author="Alex Developer" 
          time="2 hours ago" 
          content="Just set up my new React dashboard! The component architecture makes it so easy to reuse elements like Cards and Buttons." 
          initialLikes={14}
          isDarkMode={isDarkMode} 
        />
        <Post 
          author="Sarah Engineer" 
          time="5 hours ago" 
          content="CSS Modules are a lifesaver for keeping styles scoped to specific components!" 
          initialLikes={32}
          isDarkMode={isDarkMode} 
        />
      </div>

      {/* Right Sidebar */}
      <div style={{ flex: '1' }}>
        <Card isDarkMode={isDarkMode}>
          <h3 style={{ marginTop: 0, marginBottom: '16px', fontSize: '18px' }}>Notifications</h3>
          <Notification type="like" message="Alex liked your post." time="10m ago" />
          <Notification type="follow" message="Sarah started following you." time="1h ago" />
          <Notification type="comment" message="New comment on your dashboard." time="2h ago" />
        </Card>
      </div>

    </div>
  );
}

export default Home;