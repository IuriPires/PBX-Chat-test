import React from 'react';

import { Aside, UserItem, UserImage, UserName } from './styles';

const UserAside = ({ usersAlreadyIn }) => {
  return (
    <Aside>
      {usersAlreadyIn.map((user) => (
        <UserItem key={user.id + Math.random()}>
          <UserImage src={user.image} alt={user.name} />
          <UserName>{user.name}</UserName>
        </UserItem>
      ))}
    </Aside>
  );
};

export default UserAside;
