import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export const setUserName = (ObjTransport) => {
  console.log({ ObjTransport }, 'action');
};

export const sendMessage = () => {
  return { socket };
};
