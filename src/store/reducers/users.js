let initialState = {
  username: '',
  email: '',
  avatar: '',
  role: '',
  acl: [],
  paymentsHistory: [],
  confirmed: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'LOGIN':
    return { ...state, ...payload };
  default:
    return state;
  }
};
