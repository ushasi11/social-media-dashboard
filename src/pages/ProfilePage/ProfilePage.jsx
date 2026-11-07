import React from 'react';
import Profile from '../../components/Profile/Profile';

function ProfilePage() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Profile 
        name="Ushasi Bag" 
        bio="Web Development Intern @ The Developers Arena | React Enthusiast" 
        following="128" 
        followers="342" 
      />
    </div>
  );
}

export default ProfilePage;