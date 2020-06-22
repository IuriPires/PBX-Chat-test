import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { v4 as uuid } from 'uuid';
import socket from './services/socket';

import './App.css';

import Modal from './components/modal';
import UserAside from './components/usersAside';

import store from './store';

const myId = uuid();

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [usersAlreadyIn, setUsersAlreadyIn] = useState([]);

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      setMessages([...messages, newMessage]);
    socket.on('message.show', handleNewMessage);
    return () => socket.off('message.show', handleNewMessage);
  }, [messages]);

  useEffect(() => {
    const handleNewUsers = (newUsers) => {
      const usersFlated = [...usersAlreadyIn, newUsers].flat();
      setUsersAlreadyIn([...usersFlated]);
      if (!userName) {
        const index = newUsers.findIndex((newUser) => newUser.id === myId);

        setUserName(newUsers[index]);
      }
    };
    socket.on('guest.show', handleNewUsers);
    return () => socket.off('message.show', handleNewUsers);
  }, [usersAlreadyIn]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim()) {
      socket.emit('message.new', {
        sender: userName,
        id: myId,
        message,
      });
      setMessage('');
    }
  };

  const handleInputChange = (event) => setMessage(event.target.value);

  return (
    <Provider store={store}>
      <UserAside usersAlreadyIn={usersAlreadyIn} />
      {!userName && <Modal myId={myId} />}
      <div className={`container ${!userName ? 'container--low-opacity' : ''}`}>
        <ul className="list">
          {messages.map((msg) => (
            <li
              className={`list__item list__item--${
                msg.id === myId ? 'mine' : 'other'
              }`}
              key={msg.id + Math.random()}
            >
              <span>{msg.name}</span>
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
            disabled={!userName}
            onChange={handleInputChange}
            placeholder="message here"
            value={message}
          />
        </form>
      </div>
    </Provider>
  );
}

export default App;
