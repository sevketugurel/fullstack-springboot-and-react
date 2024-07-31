import React from 'react';
import { ListGroup, ButtonGroup } from 'react-bootstrap';
import UpdateOrder from './UpdateOrder';
import DeleteOrder from './DeleteOrder';

const OrderList = ({ orders, fetchOrders }) => {
  return (
    <div>
      <h2>Siparişler</h2>
      <ListGroup>
        {orders.map(order => (
          <ListGroup.Item key={order.id}>
            {order.description} - {order.amount} - Kullanıcı ID: {order.userId}
            <ButtonGroup style={{ float: 'right' }}>
              <UpdateOrder order={order} fetchOrders={fetchOrders} />
              <DeleteOrder orderId={order.id} fetchOrders={fetchOrders} />
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OrderList;