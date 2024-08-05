import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const DeleteUser = ({ nickname, fetchUsers }) => {
  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete user ${nickname}?`)) {
      try {
        const response = await axios.delete(`http://localhost:8080/users/${nickname}`);
        if (response.status === 200) {
          alert('User deleted successfully');
          fetchUsers();
        }
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Error deleting user');
      }
    }
  };

  return <Button variant="danger" onClick={handleDelete}>Delete User</Button>;
};

export default DeleteUser;