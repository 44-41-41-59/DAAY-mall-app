let initialState = {
  results: [],
  searchTerm: '',
  searchedProducts: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GETPRODUCTS':
    return payload;
  case 'GETSEARCHEDPRODUCTS':
    return { ...state, searchTerm: payload.searchTerm, searchedProducts: payload.searchedProducts };
  case 'SORTPRODUCTS':
    console.log('reducerrrrrrrrrrrrrrrrr', payload);
    return { ...state.searchedProducts};
  default:
    return state;
  }
};