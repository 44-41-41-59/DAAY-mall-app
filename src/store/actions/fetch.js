
export const fetchLogin = (payload) => {
  return {
    type: 'FETCHLOGIN',
    payload: payload,
  };
};

export const LoginSuccess = (payload) => {
  return {
    type: 'LOGINSUCCESS',
    payload: payload,
  };
};

export const LoginFailed= (payload) => {
  return {
    type: 'LOGINFAILED',
    payload: payload,
  };
};

//SIGNUP ACTIONS
export const fetchSignup= (payload) => {
  return {
    type: 'FETCHSIGNUP',
    payload: payload,
  };
};

export const signupSuccess= (payload) => {
  return {
    type: 'SIGNUPSUCCESS',
    payload: payload,
  };
};

export const signupFailed= (payload) => {
  return {
    type: 'SIGNUPFAILED',
    payload: payload,
  };
};

//PAYMENT ACTIONS
export const fetchPayment= (payload) => {
  return {
    type: 'FETCHPAYMENT',
    payload: payload,
  };
};

export const paymentSuccess= (payload) => {
  return {
    type: 'PAYMENTSUCCESS',
    payload: payload,
  };
};

export const paymentFailed= (payload) => {
  return {
    type: 'PAYMENTFAILED',
    payload: payload,
  };
};