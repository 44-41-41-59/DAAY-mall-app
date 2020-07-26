let initialState = {
  images: [],
  progress: 0,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD IMAGES':
      return { ...state, ...payload };
    case 'PROGRESS':
      return { ...state, ...payload };
    default:
      return state;
  }
};
