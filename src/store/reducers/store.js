let initialState = {
  name: '',
  logo: 'holder.js/200x180',
  category: [],
  products: [],
  orders: [],
  status: 'pending',
  country: '',
  city: '',
  contactNumber: '',
  ownerID: '',
  reviews: [],
  _id: '',
};

export default (state = initialState, action) => {


  const { type, payload } = action;
  switch (type) {
  case 'ADDSTORE':
    return payload;
  case 'GETSTORE':
    return payload;
  case 'ADD STORE REVIEW':
    let reviews = state.reviews;
    reviews.push(payload);
    return {...state, ...reviews};
  default:
    return state;
  }
};

