let initialState = {
  results:[],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GETPRODUCTS':
    return payload;
  default:
    return state;
  }
};