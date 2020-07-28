import axios from 'axios';
const api = 'http://localhost:3001';

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

export const getSearchedProducts = function (searchTerm) {
  return (dispatch) => {
    return axios ({
      method: 'get',
      url: `${api}/products?searchText=${searchTerm}`,
    }).then(function (response) {
      console.log('res', response.data.results);
      dispatch(getSearchedProductsAction({ searchTerm, searchedProducts: response.data.results }));
})}}

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

export const getSearchedProductsAction = (payload) => {
  return {
    type: 'GETSEARCHEDPRODUCTS',
    payload: payload,
  };
};

export const getSortingSettingAction = (payload) => {
  console.log('action', payload);
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

