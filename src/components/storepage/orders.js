import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';


function Orders(props) {
  return (
    <Card>
      <Accordion.Collapse eventKey="2">
        <ListGroup>
          {props.orders.map((order) => {
            return (
              <ListGroup.Item >
                {order.products.map(product=> {
                  return (
                    <div>
                      <img src='https://picsum.photos/40/40' alt='product'/>
                      <p>Product name</p>
                      <p>Quantity</p>
                    </div>
                  );
                })}
                <p>Status: {order.status}</p>
                <p>User id: {order.userID._id}</p>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Accordion.Collapse>
    </Card>
  );

}

export default Orders;