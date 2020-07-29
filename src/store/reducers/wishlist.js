let initialState = {
  wishlist:[],
  userId:'',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GETWISHLIST':
    return {...state, ...payload };
  default:
    return state;
  }

};