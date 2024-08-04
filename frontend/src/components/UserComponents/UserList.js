import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';
import UpdateUser from './UpdateUser';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Kullanıcılar alınırken bir hata oluştu:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Kullanıcılar</h2>
      <ListGroup>
        {users.map(user => (
          <ListGroup.Item key={user.id}>
            {user.name} - {user.email}
            <UpdateUser user={user} fetchUsers={fetchUsers} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;