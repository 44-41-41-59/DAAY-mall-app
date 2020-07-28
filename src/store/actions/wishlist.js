import axios from 'axios';
import getHeader from '../header';
const api ='https://daaymall-401-project.herokuapp.com';  
// const api='http://localhost:3001';


export const getWishlist = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/wishlist/5f1fe028508bff0017282214`,  //make it dynamic by getting from params
      headers: getHeader() ,
    }).then(function (response) {
      console.log('helloooooooooooo from wishlist',response.data);
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