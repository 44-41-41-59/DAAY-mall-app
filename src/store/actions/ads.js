import axios from 'axios';
const api = 'http://localhost:3001';

export const getAdvertising = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/advertising`,
    }).then(function (response) {
      console.log('res', response.data);
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
