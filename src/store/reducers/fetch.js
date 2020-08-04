let initialState = {
  loginSuccess : false,
  loginFailed: false,
  loginErrorMsg: false,
  fetchLogin: false,

  signupSuccess : false,
  signupFailed: false,
  signupErrorMsg: false,
  fetchSignup: false,

  paymentSuccess : false,
  paymentFailed: false,
  paymentErrorMsg: false,
  fetchpayment: false,
  fetchAddProductSuccesses: false,
  fetchAddProductFailer: false,
  fetchAddCardSuccesses:false,
  fetchAddWishListSuccesses:false,
  fetchModalFailer:false,

  fetchModalStoreSuccess:false,
  storeId:'',
  // fetchAddWishListFailer:false
};
    
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'FETCHLOGIN':
    return {...state, ...payload };
  case 'LOGINSUCCESS':
    return {...state, ...payload };
  case 'LOGINFAILED':
    return {...state, ...payload };

  case 'FETCHSIGNUP':
    return {...state, ...payload };
  case 'SIGNUPSUCCESS':
    return {...state, ...payload };
  case 'SIGNUPFAILED':
    return {...state, ...payload };

  case 'FETCHPAYMENT':
    return {...state, ...payload };
  case 'PAYMENTSUCCESS':
    return {...state, ...payload };
  case 'PAYMENTFAILED':
    return {...state, ...payload };
  case 'ADD PRODUCT SUCCESS':
    return {...state, fetchAddProductSuccesses:true};
  case 'ADD PRODUCT SUCCESS CLOSE THE MODAL':
    return {...state, fetchAddProductSuccesses:false};
  case 'ADD CART MODAL':
    return {...state, fetchAddCardSuccesses:true};
  case 'ADD CART CLOSE MODAL':
    return {...state, fetchAddCardSuccesses:false};
  case 'ADD WISH LIST MODAL':
    return {...state, fetchAddWishListSuccesses:true};
  case 'ADD WISH LIST CLOSE MODAL':
    return {...state, fetchAddWishListSuccesses:false};
  case 'ADD WISH LIST CLOSE MODAL ERROR':
    return {...state, fetchAddWishListFailer:true};
  case 'ADD MODAL ERROR':
    return {...state, fetchModalFailer:true};
  case 'ADD CLOSE MODAL ERROR CLOSE':
    return {...state, fetchModalFailer:false};
  case 'ADDSTORE':
    return {...state, fetchModalStoreSuccess:true,storeId:payload};
  default:
    return state;
  }
};