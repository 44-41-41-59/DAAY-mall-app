let initialState = {
  pending: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'GET PENDING STORES':
    return { ...state, ...payload };
  case 'RESPONSE TO STORES':
    let pending = newPending(state.pending, payload);
    return { ...state, pending };
  default:
    return state;
  }
};

function newPending(arr, id) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._id !== id) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
