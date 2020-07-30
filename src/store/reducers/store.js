let initialState = {
  name: '',
  logo: '',
  category: [],
  images: [],
  products: [],
  status:   'pending',
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
  default:
    return state;
  }
};
