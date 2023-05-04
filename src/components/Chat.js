import React, { useState } from 'react';

function Chat() {
  const [message, setMessage] = useState('');
  const [profile, setProfile] = useState('default');

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(`Sending message "${message}" to ${profile} profile.`);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat</h2>
      <form onSubmit={handleSendMessage}>
        <label>
          Profile:
          <select value={profile} onChange={handleProfileChange}>
            <option value="default">Default</option>
            <option value=" Morgan Jason">Morgan Jason</option>
            <option value="Medrine">Medrine</option>
            <option value="Keroka Dealers">Keroka Dealers</option>
            <option value="Bethwel">Bethwel</option>
            <option value="Lets Connect Admin">Lets Connect Admin</option>
          </select>
        </label>
        <br />
        <label>
          Message:
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
