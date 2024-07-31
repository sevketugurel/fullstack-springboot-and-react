import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const DeleteOrder = ({ orderId, fetchOrders }) => {
  const deleteOrder = async () => {
    try {
      const response = await axios.delete(`http://localhost:8081/orders/${orderId}`);
      if (response.status === 200) {
        fetchOrders();
        alert('Sipariş başarıyla silindi!');
      } else {
        console.error('Beklenmedik bir durum oluştu:', response);
        alert('Sipariş silinirken beklenmedik bir durum oluştu.');
      }
    } catch (error) {
      console.error('Sipariş silinirken bir hata oluştu:', error);
      alert('Sipariş silinirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <Button variant="danger" onClick={deleteOrder}>
      Sil
    </Button>
  );
};

export default DeleteOrder;