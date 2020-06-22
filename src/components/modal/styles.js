import styled from 'styled-components';

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 10%;
  border-radius: 10px;
  transform: translate(-50%, 0);
  align-items: center;
  max-width: 450px;
  min-width: 400px;
  max-height: 350px;
  min-height: 300px;

  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  padding: 3rem;
  z-index: 999;

  background-color: #fafafa;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 40px;
  width: 220px;
  height: 40px;
  background-color: red;

  color: #fff;
  font-size: 16px;
`;
