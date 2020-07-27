let initialState = {
  results: [],
  searchTerm: '',
  searchedProducts: [],
  sortBy: '',
  sortPriceRange: '',
  sortRating: '0-5',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GETPRODUCTS':
    return payload;
  case 'GETSEARCHEDPRODUCTS':
    console.log('inside reducers', payload);
    return { ...state, searchTerm: payload.searchTerm, searchedProducts: payload.searchedProducts };
  case 'SORTPRODUCTS':
    return { ...state, sortBy: payload.sortBy, sortPriceRange: payload.sortPriceRange, sortRating: payload.sortRating };
  default:
    return state;
  }
};