import axios from 'axios';
import base64 from 'base-64';
import getHeader from '../header';
import cookie from 'react-cookies';
const api = 'http://localhost:3001';
// const api = 'https://daaymall-401-project.herokuapp.com';


export const auth = (userInfo) => ({
  type: 'LOGIN',
  payload: userInfo,
});

function getUserData(obj) {
  let acl = obj.acl.acl;
  let { avatar, confirmed, email, role, username, _id } = obj.data;
  return { avatar, confirmed, email, role, username, _id, acl };
}

export const loginRemoteUser = function (email, password) {
  return async (dispatch) => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      authorization: `Basic ${base64.encode(`${email}:${password}`)}`,
    };
    return axios
      .get(api + '/auth', { headers })
      .then((response) => {
        cookie.save('auth', response.data.data.token, { path: '/' });
        dispatch(auth(getUserData(response.data)));
      })
      .catch(console.log);
  };
};
export const signUpRemoteUser = function (username, email, password) {
  return async (dispatch) => {
    return axios
      .post(
        api + '/auth',
        { username, email, password },
        { headers: getHeader() }
      )
      .then((response) => {
        cookie.save('auth', response.data.data.token, { path: '/' });

        dispatch(auth(getUserData(response.data)));
      })
      .catch(console.log);
  };
};

export const checkRemoteUser = function () {
  return async (dispatch) => {
    console.log('helo');
    return axios({
      url: api + '/auth/check',
      headers: getHeader(),
      method: 'get',
    })
      .then((response) => {
        console.log(response.data);
        dispatch(auth(getUserData(response.data)));
      })
      .catch(console.log);
  };
};
