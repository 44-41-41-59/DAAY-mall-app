import React from 'react';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cart.scss';

export default function Cart(props) {
  return (
    <div class="myBody">
      <h1>My Cart ({props.user.cart.length})</h1>
      {props.user.cart.map((item) => {
        return (
          <div>
            <p>image => {item.products.images[0]}</p>
            <p>name => {item.products.name}</p>
            <p>price => {item.products.price}</p>
            <p>seal => {item.products.seal}</p>
          </div>
        );
      })}

      <p>
        total =>{' '}
        {props.user.cart.reduce((pre, cur) => pre + cur.products.price, 0)}
      </p>
    </div>
  );
}
