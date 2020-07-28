let initialState = {
  favoriteStores:[],
  userId:'',
};
  
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GETFAVORITESTORES':
    return {...state, ...payload };
  default:
    return state;
  }
  
};