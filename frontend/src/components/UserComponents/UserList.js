import React from 'react';
import { ListGroup } from 'react-bootstrap';

const UserList = ({ users }) => {
  return (
    <div>
      <h2>Kullanıcılar</h2>
      <ListGroup>
        {users.map(user => (
          <ListGroup.Item key={user.id}>
            {user.name} - {user.email}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;