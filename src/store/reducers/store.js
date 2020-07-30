let initialState = {
  name: '',
  logo: 'holder.js/200x180',
  category: [],
  images: [],
  products: [],
  orders:[],
  status: 'pending',
  country: '',
  city: '',
  contactNumber: '',
  ownerID: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'ADDSTORE':
    return payload;
  case 'GETSTORE':
    return payload;
  default:
    return state;
  }
};

