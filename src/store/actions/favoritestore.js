import axios from 'axios';
import getHeader from '../header';
// const api = 'http://localhost:3001';
// const api = 'https://daaymall-401-project.herokuapp.com';
const api = 'https://daaymall.herokuapp.com';


export const getFavoriteStores = function () {
  console.log('helloooooooooooo from favorite stores');
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/favorite/5f1fe028508bff0017282214`, //make it dynamic by getting from params
      headers: getHeader(),
    }).then(function (response) {
      dispatch(
        getFavoriteStoresAction({ favoriteStores: response.data.results }),
      );
    });
  };
};

export const getFavoriteStoresAction = (payload) => {
  return {
    type: 'GETFAVORITESTORES',
    payload: payload,
  };
};
