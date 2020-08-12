// const api = 'http://localhost:3001';
// const api = 'https://daaymall-401-project.herokuapp.com';
const api = 'https://daaymall.herokuapp.com';


export const getPaginationSettings = function (
  currentPage,
  itemPerPage,
  currentItems,
) {
  return (dispatch) => {
    console.log(
      'action paginaaaaaaaaaation',
      currentPage,
      itemPerPage,
      currentItems,
    );
    dispatch(setPaginationAction({ currentPage, itemPerPage, currentItems }));
  };
};
export const setPaginationAction = (payload) => ({
  type: 'PAGINATION',
  payload,
});
