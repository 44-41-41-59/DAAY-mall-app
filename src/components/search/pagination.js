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

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic = (
  <div>
    <Pagination>{items}</Pagination>
    <br />

    <Pagination size="lg">{items}</Pagination>
    <br />

    <Pagination size="sm">{items}</Pagination>
  </div>
);

function PaginationBar(props) {

  return (
    <>

    </>
  );
}

export default PaginationBar;