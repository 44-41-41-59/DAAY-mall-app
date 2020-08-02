let initialState = {
  results:[],
};
  
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GETSTORES':
    return {...state, ...payload };
  default:
    return state;
  }
  
};