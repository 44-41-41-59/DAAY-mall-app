import axios from 'axios';
const api = 'https://daaymall-401-project.herokuapp.com';

export const getProducts = function () {
  return (dispatch) => {
    return axios ({
      method: 'get',
      url: `${api}/products`,
    }).then(function (response) {
      console.log('res', response.data);
      dispatch(getProductsAction({ results: response.data.resultes })); //change resultes to results
    });
  };
};

export const getProductsAction = (payload) => {
  return {
    type: 'GETPRODUCTS',
    payload: payload,
  };
};