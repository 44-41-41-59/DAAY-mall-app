import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPaginationSettings } from '../../store/actions/pagination';
import Pagination from 'react-bootstrap/Pagination';
import { MDBRow, MDBCol, MDBPageItem, MDBPageNav, MDBPagination } from 'mdbreact';
import { If, Then, Else } from '../if/if';



function PaginationFunction(props) {
  const [activePage, setActivePage] = useState(1);
  let paginationHandler = (number) => {
    setActivePage(number);
    props.getPaginationSettings(number, 8, props.currentItems);
  };
  return (
    <MDBRow>
      <MDBCol>
        <MDBPagination circle color='amber' style={{justifyContent:'center', alignItems:'center'}}>
          <MDBPageItem>
            <MDBPageNav className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          {props.pageNumbers.map(number => {
            return (
              <If condition={activePage === number}>
                <Then>
                  <MDBPageItem onClick={() => props.getPaginationSettings(number, 8, props.currentItems)} active>
                    <MDBPageNav className="page-link">
                      {number}
                    </MDBPageNav>
                  </MDBPageItem>
                </Then>
                <Else>
                  <MDBPageItem onClick={() => paginationHandler(number)}>
                    <MDBPageNav className="page-link">
                      {number}
                    </MDBPageNav>
                  </MDBPageItem>
                </Else>
              </If>
            );
          })}
        </MDBPagination>
      </MDBCol>
    </MDBRow>

  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.results,
    currentPage: state.pagination.currentPage,
    itemPerPage: state.pagination.itemPerPage,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getPaginationSettings: (currentPage, itemPerPage, currentItems) => dispatch(getPaginationSettings(currentPage, itemPerPage, currentItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationFunction);

