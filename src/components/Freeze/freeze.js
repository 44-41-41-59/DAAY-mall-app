import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './freeze.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import {
  getStorePending,
  resposeToStore,
  addComplaint,
} from '../../store/actions/admin';
export default function Dashboard() {
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStorePending());
  }, [dispatch]);
  function handelAddComplaint(e) {
    e.preventDefault();
    let paymentdistoryID = e.target.payments.value;
    let productID = e.target.product.value;
    dispatch(addComplaint({ paymentdistoryID, productID }));
  }
  return (
    <div id="adminFreeze">
      <Form.Label id="adminLabel">Freeze order</Form.Label>
      <Form onSubmit={handelAddComplaint}>
        <input type="text" name="payments" placeholder="paymentdistory"></input>
        <input type="text" name="product" placeholder="Product ID"></input>
        <Button variant="primary" value="Freeze">
            Freeze
        </Button>
        <Link to="/admin/adminPage">
          <Button variant="primary">
          Back
          </Button>
        </Link>
      </Form>
    </div>
  );
}
