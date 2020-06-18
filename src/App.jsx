import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { v4 as uuid } from 'uuid';

import './App.css';

const socket = io('http://localhost:3000');
socket.on('connect', () => console.log('Socket connected successfully'));

const myId = uuid();

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      setMessages([...messages, newMessage]);
    socket.on('chat.message', handleNewMessage);
    return () => socket.off('chat.message', handleNewMessage);
  }, [messages]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit('chat.message', {
        id: myId,
        message,
      });
      setMessage('');
    }
  };

  const handleInputChange = (event) => setMessage(event.target.value);

  return (
    <div className="App container">
      <ul className="list">
        {messages.map((msg) => (
          <li
            className={`list__item list__item--${
              msg.id === myId ? 'mine' : 'other'
            }`}
            key={msg.id + Math.random()}
          >
            <span
              className={`message message--${
                msg.id === myId ? 'mine' : 'other'
              }`}
            >
              {msg.message}
            </span>
          </li>
        ))}
      </ul>

      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="message here"
          value={message}
        />
      </form>
    </div>
  );
}

export default App;
