import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './admin.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
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
    //   return () => {
    //       cleanup
    //   }
  }, [dispatch]);
  function handelAddComplaint(e) {
    e.preventDefault();
    let paymentdistoryID = e.target.payments.value;
    let productID = e.target.product.value;
    dispatch(addComplaint({ paymentdistoryID, productID }));
  }
  // if (user.role !== 'admin') return <Redirect to="/" />;
  return (
    <div id="adminDashboard">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan="13"> Pending stores</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>status</p></td>
            <td><p>name</p></td>
            <td><p>Demo</p></td>
            <td><p>Category</p></td>
            <td><p>City</p></td>
            <td><p>Country</p></td>
            <td><p>ID</p></td>
            <td><p>Owner avatar</p></td>
            <td><p>Owner email</p></td>
            <td><p>Owner username</p></td>
            <td><p>Owner ID</p></td>
            <td><p>Approve</p></td>
            <td><p>Reject</p></td>
          </tr>
          {admin.pending.map((item) => {
            console.log(item);
            return (
              <tr>
                <td><span class="fixing">{item.status}</span></td>
                <td><span class="fixing">{item.name}</span></td>
                <td><img src={item.logo} alt=""></img></td>
                <td><span class="fixing">{item.category}</span></td>
                <td id="citytd"><span class="fixing">{item.city}</span></td>
                <td><span class="fixing">{item.country}</span></td>
                <td><span class="fixing">{item._id}</span></td>
                <td><img src={item.ownerID.avatar} alt=""/></td>
                <td><span class="fixing">{item.ownerID.email}</span></td>
                <td><span class="fixing">{item.ownerID.username}</span></td>
                <td><span class="fixing">{item.ownerID._id}</span></td>
                <td><button class="ApproveAndReject" onClick={() => dispatch(resposeToStore('approved', item._id))}>Approvel</button></td>
                <td><button class="ApproveAndReject" id="Reject" onClick={() => dispatch(resposeToStore('rejected', item._id))}>Reject</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Link to="/admin/adminPage">
        <Button variant="primary" id="buttonBack">
          Back
        </Button>
      </Link>
    </div>
  );
}
