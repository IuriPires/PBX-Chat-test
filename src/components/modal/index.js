import React from 'react';
import { ContainerModal, Avatar, Input, Button } from './styles';
import imageList from '../../utils/imageList';

function Modal() {
  function generateRandomIndex() {
    return Math.floor(Math.random() * (5 - 1)) + 1;
  }

  return (
    <ContainerModal>
      <Avatar src={imageList[generateRandomIndex()].url} />
      <Input placeholder="Digite um username" />
      <Button>Entrar</Button>
    </ContainerModal>
  );
}

export default Modal;
