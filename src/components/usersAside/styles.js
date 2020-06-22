import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  width: 150px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #434758;
  overflow: scroll;
  z-index: -1;
`;

export const UserItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  margin-top: 10px;

  &:hover {
    background-color: #eeee;
  }
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 4px;
`;

export const UserName = styled.span`
  font-size: 14px;
  margin-left: 8px;
  color: #fff;
`;
