import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  // MDBCardTitle,
  // MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import Show from '../show/index';
import { If, Then, Else } from '../if/if';

function ProductCard(props) {
  let sum = 0;
  let ratingStars = [];
  let noRate = false;
  let noRateStars = [];
  let emptyRatingStars = [];
  let priceAfterSale = 0;
  props.cardProduct.reviews.forEach(review => {
    sum = sum + review.rate;
  });
  let avg = Math.ceil(sum / props.cardProduct.reviews.length);
  for (let i = 0; i < avg; i++) {
    ratingStars.push(' ');
  }
  for (let i = 0; i < 5 - avg; i++) {
    emptyRatingStars.push(' ');
  }
  if (isNaN(avg)) {
    noRate = true;
    for (let i = 0; i < 5; i++) {
      noRateStars.push(' ');
    }
  }
  if (props.cardProduct.sale) {
    priceAfterSale = Math.floor(props.cardProduct.price - (props.cardProduct.price * (props.cardProduct.sale / 100)));
  }
  let searchPageStyle = {};
  let cardWidth = { width: '17vw', marginRight: '2vw' };

  if (props.searchPage) {
    searchPageStyle = { marginBottom: '7vh' };
    cardWidth =  { width: '17vw', marginRight: '1vw' };
  }
  return (
    <MDBRow style={searchPageStyle}>
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4' >
        <MDBCard cascade narrow ecommerce style={cardWidth}>
          <MDBCardImage
            cascade
            src={props.cardProduct.images[0]}
            top
            alt='product photo'
            overlay='white-slight'
          />
          <MDBCardBody cascade className='text-center'>
            <a href='#!' className='grey-text'>
              <h5>{props.cardProduct.category}</h5>
            </a>
            <strong>
              <p>
                <Link to={`/product/${props.cardProduct._id}`}
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }} >
                  {props.cardProduct.name}
                </Link>
              </p>
            </strong>
            <If condition={!noRate}>
              <Then>
                {ratingStars.map(star => {
                  return <MDBIcon icon='star' />;
                })}
                {emptyRatingStars.map(star => {
                  return <MDBIcon far icon='star' />;
                })}
              </Then>
              <Else>
                {noRateStars.map(star => {
                  return <MDBIcon far icon='star' />;
                })}
              </Else>
            </If>

            {/* <MDBCardText>
              {props.cardProduct.description}
            </MDBCardText> */}
            <MDBCardFooter className='px-1' style={{ padding: '0.75rem 1.25rem 1.75rem' }}>
              <If condition={!props.cardProduct.sale}>
                <Then>
                  <span className='float-left font-weight-bold' style={{ fontSize: '0.8rem' }}>
                    <strong>{props.cardProduct.price} JOD</strong>
                  </span>
                </Then>
                <Else>
                  <span className='float-left font-weight-bold' style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: 'red', marginRight: '1vw' }}>
                    <strong>{props.cardProduct.price} JOD</strong>
                  </span>
                  <span className='float-left font-weight-bold' style={{ fontSize: '0.8rem' }}>
                    <strong>{priceAfterSale} JOD</strong>
                  </span>
                </Else>
              </If>

              <span className='float-right' style={{ fontSize: '1rem' }}>
                <MDBTooltip domElement placement='top'>
                  <i className='grey-text fa fa-shopping-cart mr-3' />
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
    </MDBRow >
  );
}

export default ProductCard;