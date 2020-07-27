let initialState = {
  results: [],
  mainProducts: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GETPRODUCTS':
      return payload;
    case 'GET MAIN PAGE PRODUCTS':
      console.log('oooooooooooooooooo');
      state.mainProducts = payload;
      return { ...state };
    default:
      return state;
  }
};
