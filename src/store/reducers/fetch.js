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
  default:
    return state;
  }
};