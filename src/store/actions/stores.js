import axios from 'axios';
import getHeader from '../header';
const api = 'https://daaymall-401-project.herokuapp.com';
// const api = 'https://backup-app-daaymall.herokuapp.com/';

// const api = 'http://localhost:3001';

export const getStores = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/store`, //
      headers: getHeader(),
    }).then(function (response) {
      console.log('helloooooooooooo from Storessss', response.data);
      dispatch(getStoresAction({ results: response.data.results }));
    });
  };
};

export const getStoresAction = (payload) => {
  return {
    type: 'GETSTORES',
    payload: payload,
  };
};
