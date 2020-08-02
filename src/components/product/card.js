import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
} from 'mdbreact';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  return (
    <MDBRow>
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4' >
        <MDBCard cascade narrow ecommerce style={{ width: '15vw', marginRight: '2vw' }}>
          <MDBCardImage
            cascade
            src={props.product.images[0]}
            top
            alt='product photo'
            overlay='white-slight'
          />
          <MDBCardBody cascade className='text-center'>
            <a href='#!' className='grey-text'>
              <h5>{props.product.category}</h5>
            </a>
            {/* <MDBCardTitle> */}
            <strong>
              <p>
                <Link to={`/product/${props.product._id}`}>
                  {props.product.name.split(' ')[0]} {props.product.name.split(' ')[1]} {props.product.name.split(' ')[2]}
                </Link>
              </p>
            </strong>
            {/* </MDBCardTitle> */}
            <MDBIcon icon='star' />
            <MDBIcon icon='star' />
            <MDBIcon icon='star' />
            <MDBIcon far icon='star' />
            <MDBIcon far icon='star' />
            {/* <MDBCardText>
              {props.product.description}
            </MDBCardText> */}
            <MDBCardFooter className='px-1'>
              <span className='float-left font-weight-bold' style={{fontSize:'1rem'}}>
                <strong>{props.product.price} JOD</strong>
              </span>
              <span className='float-right' style={{fontSize:'1rem'}}>
                <MDBTooltip domElement placement='top'>
                  <i className='grey-text fa fa-shopping-cart mr-3'/>
                  <span>Add to Cart</span>
                </MDBTooltip>
                <MDBTooltip domElement placement='top'>
                  <i className='grey-text fa fa-heart' />
                  <span>Add to Whishlist</span>
                </MDBTooltip>
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}

export default ProductCard;