let initialState = {
  currentPage:1,
  itemsPerPage:12,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'PAGINATION':
    return { ...state, ...payload };
  default:
    return state;
  }
};
