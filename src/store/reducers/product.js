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
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET PRODUCT':
      return { ...state, ...payload };

    default:
      return state;
  }
};
