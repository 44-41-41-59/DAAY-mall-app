import React from 'react';
import StripeCeckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import {useDispatch} from 'react-redux'
import {deleteCardFromCart} from '../../store/actions/products'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,
} from 'mdbreact';
import './cart.scss';
import { checkout } from '../../store/actions/products';

export default function Cart(props) {
  const dispatch = useDispatch()
  let cost = props.user.cart && props.user.cart.reduce((pre, cur) => {
    let price = cur.products&& cur.products.price;
    let sale = cur.products.sale;
    let per = (price / 100) * sale;
    return pre + (cur.products.price * cur.quantity - per * cur.quantity);
  }, 0);
  const makePayment = (token) => {
    let body = { token, amount: Math.ceil(cost * 100) };
    props.pay(body);
  };

  return (
    <div class="myBody">
      <div id="cartsHeader">
        <MDBNavbar color='white'  expand="md" scrolling fixed="top">
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <MDBNavbarNav left>
              <div id="Carts">
                <img src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif" id="logoCardImg"></img>
                <h1 id="myCarts">My Cart ({props.user.cart.length})</h1>
              </div>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <a className="nav-link disabled" href="#" id="color">Total {cost.toFixed(2)}</a>
              <StripeCeckout
                stripeKey="pk_test_51Gw6p5DCWnftj01CHDFox6ZFihtNyZ0EkHqOxR8uTnYB0jeLLTPfZBPtuRQXcFBSd4McXulw456Dl1Cp6mq3t6lR00booR4E8t"
                token={makePayment}
                name="test"
                amount={cost * 100}>
                {props.fetch.paymentFailed && alert('Some information are missing')}
                <button onClick={()=>dispatch(checkout())}>Check Out</button>
              </StripeCeckout>
            </MDBNavbarNav>
          </div>
        </ MDBNavbar >
      </div>

      <Table >
        <thead>
          <tr id="tableHeader">
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th><span role="img" aria-label="sad">😥</span></th>
          </tr>
        </thead>
        {props.user.cart.map((item) => {
          let price = item.products.price;
          let quantity = item.quantity;
          let sale = item.products.sale;
          let per = (price / 100) * sale;
          return (
            <tbody>
              <tr>
                <td id='firstTd'>
                  <div class="image">
                    <Link to={`/product/${item.products._id}`}>
                      <img alt="productImage" src={item.products.images[0]} />
                    </Link>
                  </div></td>
                <td id='secondTd'>{item.products.name}</td>
                <td id='thirdTd'>  <br /> Price :{price } JOD
                </td>
                <td id='forthId'><p>{quantity}</p></td>
                <td id='fifthId'>{!!sale &&
                      'onSale: ' +
                      Math.round(
                        (price * quantity - per * quantity)* 100,
                      ) /
                      100}{' '}
                <br /> Price :{(price * quantity).toFixed(2)} JOD</td>
                <td id='sixId' onClick={()=>{dispatch(deleteCardFromCart(item._id));console.log('sdf',item)}}><i className="fas fa-trash"></i></td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}