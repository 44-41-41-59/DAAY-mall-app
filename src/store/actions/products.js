import axios from 'axios';
const api = 'https://daaymall-401-project.herokuapp.com';

export const getProducts = function () {
  return (dispatch) => {
    return axios ({
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

