import axios from 'axios';
const api = 'http://localhost:3001';

export const getProducts = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products`,
    }).then(function (response) {
      console.log('res', response.data);
      dispatch(getProductsAction({ results: response.data.resultes })); //change resultes to results
    });
  };
};

export const getMainPageProducts = function () {
  return (dispatch) => {
    console.log('product');
    return axios({
      method: 'get',
      url: `${api}/products/main`,
    }).then(function (response) {
      console.log('res', response.data);
      // return null;
      dispatch(getMainPageProductsAction(response.data)); //change resultes to results
    });
  };
};

export const getProductsAction = (payload) => {
  return {
    type: 'GETPRODUCTS',
    payload: payload,
  };
};

export const getMainPageProductsAction = (payload) => {
  return {
    type: 'GET MAIN PAGE PRODUCTS',
    payload: payload,
  };
};
