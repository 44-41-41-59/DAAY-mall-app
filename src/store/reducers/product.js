let initialState = {
  name: '',
  Timestamp: '',
  amount: 0,
  category: '',
  description: '',
  images: [],
  price: 0,
  sale: 0,
  storeID: '',
  views: 0,
  reviews: [],
  _id: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GET PRODUCT':
    return { ...state, ...payload };
  case 'ADDPRODUCT':
    return { ...state, ...payload };
  case 'ADD PRODUCT REVIEW':
    let reviews = state.reviews;
    reviews.push(payload);
    return { ...state, ...reviews };
  default:
    return state;
  }
};

