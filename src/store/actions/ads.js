import axios from 'axios';
// const api = 'http://localhost:3001';
// const api = 'https://daaymall-401-project.herokuapp.com';
const api = 'https://daaymall.herokuapp.com';


export const getAdvertising = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/advertising`,
    }).then(function (response) {
      dispatch(getAdvertisingAction({ ads: response.data })); //change resultes to results
    });
  };
};

export const getAdvertisingAction = (payload) => {
  return {
    type: 'GET MAIN PAGE ADS',
    payload: payload,
  };
};
