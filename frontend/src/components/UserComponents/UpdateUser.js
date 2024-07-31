import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

const UpdateUser = ({ user, fetchUsers }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/users/1`, { name, email });
      if (response.status === 200) {
        fetchUsers();
        handleClose();
        alert('Kullanıcı başarıyla güncellendi!');
      } else {
        console.error('Beklenmedik bir durum oluştu:', response);
        alert('Kullanıcı güncellenirken beklenmedik bir durum oluştu.');
      }
    } catch (error) {
      console.error('Kullanıcı güncellenirken bir hata oluştu:', error);
      alert('Kullanıcı güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow} style={{ marginLeft: '20px' }}>
        Güncelle
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kullanıcıyı Güncelle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateUser}>
            <Form.Group controlId="formName">
              <Form.Label>İsim</Form.Label>
              <Form.Control
                type="text"
                placeholder="İsim giriniz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" style={{ marginTop: '10px' }}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email giriniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default UpdateUser;
