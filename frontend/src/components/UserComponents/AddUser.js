import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddUser = ({ fetchUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/users', { name, email });
      fetchUsers();
      setName('');
      setEmail('');
      alert('Kullanıcı başarıyla eklendi!');
    } catch (error) {
      console.error('Kullanıcı eklenirken bir hata oluştu:', error);
    }
  };

  return (
    <div>
      <h2>Kullanıcı Ekle</h2>
      <Form onSubmit={addUser}>
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
        <Form.Group controlId="formEmail">
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
          Ekle
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;