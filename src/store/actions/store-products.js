import axios from 'axios';
import getHeader from '../header';
// const api = 'http://localhost:3001';
const api = 'https://daaymall-401-project.herokuapp.com';
// const api = 'https://backup-app-daaymall.herokuapp.com/';

// const api = 'https://daaymall-401-project.herokuapp.com';


export const addProduct = function (formData) {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/products`,
      headers: getHeader(),
      data: formData,
    })
      .then(function (response) {
        dispatch(addProductAction({ results: response.data.results }));
        dispatch({type:'ADD PRODUCT SUCCESS'})
        setTimeout(()=>{
          dispatch({type:'ADD PRODUCT SUCCESS CLOSE THE MODAL'})
        },2000)
      })
      .catch((err) => console.log(err.response));
  };
};
export const closeModal = function (formData) {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/products`,
      headers: getHeader(),
      data: formData,
    })
      .then(function (response) {
          dispatch({type:'ADD PRODUCT SUCCESS CLOSE THE MODAL'})
      })
      .catch((err) => console.log(err.response));
  };
};

export const addProductAction = (payload) => {
  return {
    type: 'ADDPRODUCTS',
    payload: payload,
  };
};
