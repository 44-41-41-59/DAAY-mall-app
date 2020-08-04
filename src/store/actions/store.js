import axios from 'axios';
import getHeader from '../header';
const api = 'http://localhost:3001';
// const api = 'https://daaymall-401-project.herokuapp.com';
// const api = 'https://backup-app-daaymall.herokuapp.com/';


export const addStore = function (storeData, logo) {
  console.log('ooooooooooooooooooooooo', logo);
  let formData = {
    name: storeData.name.value,
    logo: logo[0],
    category: storeData.category.value,
    country: storeData.country.value,
    city: storeData.city.value,
    contactNumber: parseInt(storeData.contactNumber.value),
    ownerID: storeData.ownerID.value,
  };
  console.log('form data', formData);

  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/store`,
      headers: getHeader(),
      data: formData,
    })
      .then(function (response) {
        dispatch(addStoreAction({ results: response.data }));
      })
      .catch((err) => console.log(err.response));
  };
};

export const getStore = function (id) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/store/${id}`, //make it dynamic by getting from params
      headers: getHeader(),
    }).then(function (response) {
      dispatch(getStoreAction(response.data[0]));
    });
  };
};

export const addStoreAction = (payload) => {
  return {
    type: 'ADDSTORE',
    payload: payload,
  };
};

export const getStoreAction = (payload) => {
  return {
    type: 'GETSTORE',
    payload: payload,
  };
};

export const addStoreReview = function (reviewData) {
  return (dispatch) => {
    console.log('hello');
    return axios({
      method: 'post',
      url: `${api}/review`,
      headers: getHeader(),
      data: reviewData,
    })
      .then(function (response) {
        dispatch(addStoreReviewAction(response.data));
      })
      .catch((err) => console.log(err.response));
  };
};

export const addStoreReviewAction = (payload) => {
  return {
    type: 'ADD STORE REVIEW',
    payload: payload,
  };
};
