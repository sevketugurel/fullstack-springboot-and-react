import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddOrder = ({ fetchOrders }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [userId, setUserId] = useState('');

  const addOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/orders', { description, amount, userId });
      fetchOrders();
      setDescription('');
      setAmount('');
      setUserId('');
      alert('Sipariş başarıyla eklendi!');
    } catch (error) {
      console.error('Sipariş eklenirken bir hata oluştu:', error);
    }
  };

  return (
    <div>
      <h2>Sipariş Ekle</h2>
      <Form onSubmit={addOrder}>
        <Form.Group controlId="formUserId">
          <Form.Label>Kullanıcı ID</Form.Label>
          <Form.Control
            type="number"
            placeholder="Kullanıcı ID giriniz"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Açıklama</Form.Label>
          <Form.Control
            type="text"
            placeholder="Açıklama giriniz"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formAmount">
          <Form.Label>Miktar</Form.Label>
          <Form.Control
            type="number"
            placeholder="Miktar giriniz"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
          Ekle
        </Button>
      </Form>
    </div>
  );
};

export default AddOrder;