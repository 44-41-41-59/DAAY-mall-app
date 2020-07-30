import axios from 'axios';
import getHeader from '../header';
const api = 'https://daaymall-401-project.herokuapp.com';
// const api='http://localhost:3001';


export const addStore = function (storeData) {
  let formData = {
    name: storeData.name.value,
    logo: storeData.logo.value,
    category: storeData.category.value,
    images: storeData.images.value,
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
    }).then(function (response) {
      dispatch(addStoreAction({ results: response.data }));
    });
  };
};

export const getStore = function (id) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/store/${id}`,  //make it dynamic by getting from params
      headers: getHeader(),
    }).then(function (response) {
      console.log('pleeeeeeeeeeeeeeeee', response);

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