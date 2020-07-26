import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


// function PaginationFunction(props) {
//   let pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(props.totalItems / props.itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   console.log((props.totalItems), (props.itemsPerPage));
//   return (
//     <Pagination>
//       {pageNumbers.map(number => (
//         <Pagination.Item key={number} onClick={()=>props.paginateHandler(number)}>
//           {number}
//         </Pagination.Item>
//       ))}
//     </Pagination>
//   );
// }

// export default PaginationFunction;


function PaginationBar(props) {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 15; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Pagination>{items}</Pagination>
  );
}

export default PaginationBar;