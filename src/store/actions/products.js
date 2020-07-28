import headers from '../header';
import axios from 'axios';
// const api = 'http://localhost:3001';
const api = 'https://daaymall-401-project.herokuapp.com';


export const getProducts = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products`,
    }).then(function (response) {
      dispatch(getProductsAction({ results: response.data.results }));
    });
  };
};

export const getCartProducts = function (id) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/cart/user/${id}`,
      headers: headers(),
    }).then(function (response) {
      dispatch(getCartProductsAction({ cart: response.data }));
    });
  };
};

export const getSearchedProducts = function (searchTerm) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products?searchText=${searchTerm}`,
    }).then(function (response) {
      dispatch(
        getSearchedProductsAction({
          searchTerm,
          searchedProducts: response.data.results,
        }),
      );
    });
  };
};

export const payedUserCart = function (body) {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/charge`,
      headers: headers(),
    })
      .then(function (response) {
        console.log(response);
        // dispatch(
        //   getSearchedProductsAction({
        //     searchTerm,
        //     searchedProducts: response.data.results,
        //   })
        // );
      })
      .catch((err) => console.log(err.response));
  };
};

export const getMainPageProducts = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products/main`,
    }).then(function (response) {
      dispatch(getMainPageProductsAction(response.data)); //change resultes to results
    });
  };
};

export const getSortingSetting = function (sortBy, sortPriceRange, sortRating) {
  return (dispatch) => { 
    dispatch(getSortingSettingAction({ sortBy, sortPriceRange, sortRating }));
  };
};

export const getProductsAction = (payload) => {
  return {
    type: 'GETPRODUCTS',
    payload: payload,
  };
};

export const getCartProductsAction = (payload) => {
  return {
    type: 'GET CART PRODUCTS',
    payload: payload,
  };
};
export const getSearchedProductsAction = (payload) => {
  return {
    type: 'GETSEARCHEDPRODUCTS',
    payload: payload,
  };
};

export const getSortingSettingAction = (payload) => {
  return {
    type: 'SORTPRODUCTS',
    payload: payload,
  };
};

export const getMainPageProductsAction = (payload) => {
  return {
    type: 'GET MAIN PAGE PRODUCTS',
    payload: payload,
  };
};
