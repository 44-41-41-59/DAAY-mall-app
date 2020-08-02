let initialState = {
  ads: [],
  socket: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET MAIN PAGE ADS':
      return { ...state, ...payload };
    default:
      return state;
  }
};
