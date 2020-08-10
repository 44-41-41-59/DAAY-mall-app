import axios from 'axios';
import getHeader from '../header';
// const api = 'http://localhost:3001';
const api = 'https://daaymall-401-project.herokuapp.com';
// const api = 'https://backup-app-daaymall.herokuapp.com/';


export const getWishlist = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/wishlist/5f1fe028508bff0017282214`, //make it dynamic by getting from params
      headers: getHeader(),
    }).then(function (response) {
      dispatch(getWishlistAction({ results: response.data }));
    });
  };
};

export const getWishlistAction = (payload) => {
  return {
    type: 'GETWISHLIST',
    payload: payload,
  };
};
