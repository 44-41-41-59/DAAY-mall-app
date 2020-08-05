import React ,{useEffect}from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import {getOrders} from '../../store/actions/store';
import {useDispatch,useSelector} from 'react-redux';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,
} from 'mdbreact';
function OwnerDashboard(props) {
  const store = useSelector(state => state.store);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getOrders(props.match.params.id));
  },[dispatch, props.match.params.id]);
  return (
    <>
      <Accordion defaultActiveKey="0">
        {store.orders.map((order,index)=>{
          return (
            <Card id="letsRock">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index+1}>
                  <MDBIcon icon="chevron-down" />
                </Accordion.Toggle>
          Client: {order.userID.username}{'   '}
          status: {order.status}
              </Card.Header>

              <Accordion.Collapse eventKey={index+1}>
                <Table style={{minHeight:'40vh'}}>
                  <thead>
                    <tr id="tableHeader">
                      <th>Product</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>

                  {order.products.map(product=>{
                    console.log(product);
                    let price = product.price;
                    //  let quantity = item.quantity;
                    let sale = product.sale;
                    let per = (price / 100) * sale;
                    return(
                      <tbody>
                        <tr>
                          <td id='firstTd'>
                            <div class="image">
                              <Link to={`/product/${product._id}`}>
                                <img alt="productImage" style={{width:'70px'}} src={product.images[0]} />
                              </Link>
                            </div></td>
                          <td id='secondTd'>{product.name} <p><span style={{fontWeight:'bold'}}>ID:</span> {product._id}</p></td>
                          <td id='thirdTd'>  <br /> Price :{price } JOD
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </ Table >
              </Accordion.Collapse> 
            </Card>
          );
        })}
      </Accordion> 
    </>
  );
}
export default withRouter(OwnerDashboard);