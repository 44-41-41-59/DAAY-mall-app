let initialState = {
  currentPage:1,
  itemPerPage:12,
  currentItems: [],
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
