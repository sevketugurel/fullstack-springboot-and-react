import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const UpdateOrder = ({ order, fetchOrders }) => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(order.description);
  const [amount, setAmount] = useState(order.amount);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8081/orders/${order.id}`, {
        description,
        amount
      });
      if (response.status === 200) {
        fetchOrders();
        handleClose();
        alert('Sipariş başarıyla güncellendi!');
      } else {
        console.error('Beklenmedik bir durum oluştu:', response);
        alert('Sipariş güncellenirken beklenmedik bir durum oluştu.');
      }
    } catch (error) {
      console.error('Sipariş güncellenirken bir hata oluştu:', error);
      alert('Sipariş güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{ marginRight: '20px' }}>
        Güncelle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Siparişi Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateOrder}>
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
            <Form.Group controlId="formAmount" style={{ marginTop: '10px' }}>
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
              Güncelle
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UpdateOrder;