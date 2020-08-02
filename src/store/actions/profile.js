import axios from 'axios';
import getHeader from '../header';
// const api = 'http://localhost:3001';
const api = 'https://daaymall-401-project.herokuapp.com';

export const getProfile = function (id) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/user/${id}`,
      headers: getHeader(),
    }).then(function (response) {
      dispatch(getProfileAction(response.data[0]));
    });
  };
};

export const getProfileAction = (payload) => {
  console.log('anoooollllaaaaaa', payload);
  return {
    type: 'GETPROFILE',
    payload: payload,
  };
};
