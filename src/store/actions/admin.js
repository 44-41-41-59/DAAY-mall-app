import axios from 'axios';
import headers from '../header';
// const api = 'http://localhost:3001';
// const api = 'https://daaymall-401-project.herokuapp.com';
const api = 'https://daaymall.herokuapp.com';


export const getStorePending = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/store/admin/dashboard`,
      headers: headers(),
    }).then(function (response) {
      //   console.log(response);
      dispatch(getStorePendingAction({ pending: response.data })); //change resultes to results
    });
  };
};
export const resposeToStore = function (str, id) {
  return (dispatch) => {
    console.log(str, id);
    return axios({
      method: 'patch',
      url: `${api}/store/${id}`,
      headers: headers(),
      data: { status: str },
    })
      .then(function (response) {
        console.log(response);
        dispatch(resposeToStoreAction(id)); //change resultes to results
      })
      .catch((err) => console.log(err.response));
  };
};
export const addComplaint = function ({ paymentHistoryID, productID }, id) {
  return (dispatch) => {
    console.log({ paymentHistoryID, productID }, id);
    return axios({
      method: 'patch',
      url: `${api}/admin/complaint`,
      headers: headers(),
      data: { paymentHistoryID, productID },
    })
      .then(function (response) {
        // console.log(response);
        dispatch(addComplaintAction(id)); //change resultes to results
      })
      .catch((err) => console.log(err.response));
  };
};

export const addComplaintAction = (payload) => {
  return {
    type: 'ADD COMPLAINT',
    payload: payload,
  };
};

export const getStorePendingAction = (payload) => {
  return {
    type: 'GET PENDING STORES',
    payload: payload,
  };
};

export const resposeToStoreAction = (payload) => {
  return {
    type: 'RESPONSE TO STORES',
    payload: payload,
  };
};
