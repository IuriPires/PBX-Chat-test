import React, { useState } from 'react';
import socket from '../../services/socket';
import { ContainerModal, Avatar, Input, Button } from './styles';
import imageList from '../../utils/imageList';

const Modal = ({ myId }) => {
  const [userName, setUserName] = useState('');

  function handleInput(event) {
    setUserName(event.target.value);
  }

  function generateRandomIndex() {
    return Math.floor(Math.random() * (5 - 1)) + 1;
  }

  function addUserName() {
    socket.emit('guest.new', {
      id: myId,
      name: userName,
      image: imageList[generateRandomIndex()].url,
    });
  }

  return (
    <ContainerModal>
      <Avatar src={imageList[generateRandomIndex()].url} />
      <h2>PBX Chat</h2>
      <Input
        value={userName}
        onChange={handleInput}
        placeholder="Digite um username"
      />
      <Button onClick={addUserName}>Entrar</Button>
    </ContainerModal>
  );
};

export default Modal;
