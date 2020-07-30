import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  }, []);
  function handelAddComplaint(e) {
    e.preventDefault();
    let paymentHistoryID = e.target.payments.value;
    let productID = e.target.product.value;
    dispatch(addComplaint({ paymentHistoryID, productID }));
  }
  //   if (user.role !== 'admin') return <Redirect to="/" />;
  return (
    <div>
      {admin.pending.map((item) => {
        console.log(item);
        return (
          <div>
            <button
              onClick={() => dispatch(resposeToStore('approved', item._id))}
            >
              Accept
            </button>
            <button
              onClick={() => dispatch(resposeToStore('rejected', item._id))}
            >
              Reject
            </button>
            <p>{item.status}</p>
            <p>{item.name}</p>
            <p>{item.logo}</p>
            <p>{item.category}</p>
            <p>{item.city}</p>
            <p>{item.country}</p>
            <p>{item._id}</p>
            <p>{item.ownerID.avatar}</p>
            <p>{item.ownerID.email}</p>
            <p>{item.ownerID.username}</p>
            <p>{item.ownerID.status}</p>
            {item.images.map((img) => {
              return <img src={img}></img>;
            })}
          </div>
        );
      })}
      <form onSubmit={handelAddComplaint}>
        <input type="text" name="payments" placeholder="paymentHistory"></input>
        <input type="text" name="product" placeholder="Product ID"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
