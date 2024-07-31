import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const DeleteUser = ({ userId, fetchUsers }) => {
  const deleteUser = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/users/1`);
      if (response.status === 200) {
        fetchUsers();
        alert('Kullanıcı başarıyla silindi!');
      } else {
        console.error('Beklenmedik bir durum oluştu:', response);
        alert('Kullanıcı silinirken beklenmedik bir durum oluştu.');
      }
    } catch (error) {
      console.error('Kullanıcı silinirken bir hata oluştu:', error);
      alert('Kullanıcı silinirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <Button variant="danger" onClick={deleteUser} style={{ marginLeft: '20px' }}>
      Sil
    </Button>
  );
};

export default DeleteUser;
