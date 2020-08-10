import getHeader from '../header';
import axios from 'axios';
import {
  fetchPayment,
  paymentSuccess,
  paymentFailed,
} from '../../store/actions/fetch';
// const api = 'http://localhost:3001';
const api = 'https://daaymall-401-project.herokuapp.com';

export const getProducts = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products`,
    }).then(function (response) {
      dispatch(getProductsAction({ results: response.data.results }));
    });
  };
};
export const addCart = function (data) {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/cart`,
      headers: getHeader(),
      data,
    })
      .then(function (response) {
        console.log(response, 'cart');
        dispatch(addCartAction({ cart: response.data }));
        dispatch({ type: 'ADD CART MODAL' });
        setTimeout(()=>{
          dispatch({type:'ADD CART CLOSE MODAL'})
        },2000)
      })
      .catch(err=>{console.log(err.response);dispatch({type:'ADD MODAL ERROR'})});
  };
};
export const addLike = function (data) {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/likes`,
      headers: getHeader(),
      data,
    })
      .then(function (response) {
        console.log(response, 'cart');
        // dispatch(getProductsAction({ results: response.data.results }));
      })
      .catch(console.log);
  };
};

export const addWishlist = function (data) {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/wishlist`,
      headers: getHeader(),
      data,
    })
      .then(function (response) {
        dispatch({type:'ADD WISH LIST MODAL'});
        setTimeout(()=>{
          dispatch({type:'ADD WISH LIST CLOSE MODAL'});
          
        },2000)
      }).catch(err=>{console.log(err.response);
        new Audio('./Funny.mp3').play()
        dispatch({type:'ADD MODAL ERROR'})
      });
  };
};
export const getProduct = function (id) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products/${id}`,
      headers: getHeader(),
    }).then(function (response) {

      if (response.data[0]) {
        const {
          name,
          Timestamp,
          amount,
          category,
          description,
          images,
          price,
          sale,
          storeID,
          views,
          reviews,
          _id,
        } = response.data[0];

        dispatch({
          type: 'GET PRODUCT',
          payload: {
            name,
            Timestamp,
            amount,
            category,
            description,
            images,
            price,
            sale,
            storeID,
            views,
            reviews,
            _id,
          },
        });
      }
    }).catch(err=>console.log(err.response));
  };
};

export const getCartProducts = function (id) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/cart/user/${id}`,
      headers: getHeader(),
    }).then(function (response) {
      dispatch(getCartProductsAction({ cart: response.data }));
    });
  };
};

export const getSearchedProducts = function (searchTerm) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products?searchText=${searchTerm}`,
    }).then(function (response) {
      dispatch(
        getSearchedProductsAction({
          searchTerm,
          searchedProducts: response.data.results,
        }),
      );
    }).catch(err=>err.response);
  };
};
export const checkout = function(){
  return (dispatch) => dispatch({type:'CHECKOUT PAYMENT'})
}
export const deleteCardFromCart = function (id) {
  return (dispatch) => {
    return axios({
      method: 'delete',
      url: `${api}/cart/${id}`,
      headers:getHeader()
    }).then(function (response) {
      dispatch({type:'DELETE CARD FROM CART',payload:id})
    }).catch(err=>err.response);
  };
};

export const getCategorySearchProducts = function (searchTerm) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products${searchTerm}`,
    }).then(function (response) {
      console.log('++++++++++++++++++++++++++++', response);
      dispatch(
        getSearchedProductsAction({
          searchTerm,
          searchedProducts: response.data.results,
        }),
      );
    });
  };
};


export const payedUserCart = function (data) {
  return (dispatch) => {
    console.log('action', data);
    dispatch(fetchPayment({ fetchpayment: true }));
    return axios({
      method: 'post',
      url: `${api}/charge`,
      headers: getHeader(),
      data,
    })
      .then(function (response) {
        console.log(response);
        dispatch(paymentSuccess({ paymentSuccess: true }));
        dispatch(fetchPayment({ fetchpayment: false }));
        // dispatch(
        //   getSearchedProductsAction({
        //     searchTerm,
        //     searchedProducts: response.data.results,
        //   })
        // );
      })
      .catch((err) => {
        dispatch(
          paymentFailed({
            paymentFailed: true,
          }),
        );
        dispatch(fetchPayment({ fetchpayment: false }));
      });
  };
};

export const getMainPageProducts = function () {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/products/main`,
    }).then(function (response) {
      dispatch(getMainPageProductsAction(response.data)); //change resultes to results
    });
  };
};

// export const getSearchProducts = function (str) {
//   return (dispatch) => {
//     return axios({
//       method: 'get',
//       url: `${api}/search?searchText=${str}`,
//     }).then(function (response) {
//       console.log(response.data);
//       dispatch(
//         getSearchProductsAction({ suggestions: response.data.suggestion })
//       ); //change resultes to results
//     });
//   };
// };

export const getSortingSetting = function (sortBy, sortPriceRange, sortRating) {
  return (dispatch) => {
    dispatch(getSortingSettingAction({ sortBy, sortPriceRange, sortRating }));
  };
};

// export const getSearchProductsAction = (payload) => {
//   return {
//     type: 'GET SEARCH',
//     payload: payload,
//   };
// };

export const getProductsAction = (payload) => {
  return {
    type: 'GETPRODUCTS',
    payload: payload,
  };
};

export const getCartProductsAction = (payload) => {
  return {
    type: 'GET CART PRODUCTS',
    payload: payload,
  };
};
export const getCartProductAction = (payload) => {
  return {
    type: 'GET CART PRODUCTS',
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
  return {
    type: 'SORTPRODUCTS',
    payload: payload,
  };
};

export const getMainPageProductsAction = (payload) => {
  return {
    type: 'GET MAIN PAGE PRODUCTS',
    payload: payload,
  };
};

export const getProductAction = (payload) => {
  return {
    type: 'GET MAIN PAGE PRODUCTS',
    payload: payload,
  };
};

export const addCartAction = (payload) => {
  return {
    type: 'ADDCART',
    payload: payload,
  };
};

export const addProductReview = function (reviewData) {
  return (dispatch) => {
    return axios({
      method: 'post',
      url: `${api}/review`,
      headers: getHeader(),
      data: reviewData,
    })
      .then(function (response) {
        dispatch(addProductReviewAction(response.data));
      })
      .catch((err) => console.log(err.response));
  };
};

export const addProductReviewAction = (payload) => {
  return {
    type: 'ADD PRODUCT REVIEW',
    payload: payload,
  };
};

export const getProductReviews = function (productID) {
  return (dispatch) => {
    return axios({
      method: 'get',
      url: `${api}/review`,
      headers: getHeader(),
      data: productID,
    })
      .then(function (response) {
        dispatch(getProductReviewsAction(response.data));
      })
      .catch((err) => console.log(err.response));
  };
};

export const getProductReviewsAction = (payload) => {
  return {
    type: 'GET PRODUCT REVIEWS',
    payload: payload,
  };
};

export const getCategorySearchProductsAction = (payload) => {
  return {
    type: 'GETCATEGORYSEARCHEDPRODUCTS',
    payload: payload,
  };
};
