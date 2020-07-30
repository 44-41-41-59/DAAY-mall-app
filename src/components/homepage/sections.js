import React from 'react';
import './homepage.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import { MDBIcon } from 'mdbreact';

export const Sale = (props) => {
  return (
    <div class="container slideRowContainer">
      <MDBIcon icon="dollar-sign" id="saleIcon" />
      <span>Sale</span>
      <div class="row" id="slideRow">
        {props.products.mainProducts.onSale &&
          props.products.mainProducts.onSale.map((item) => {
            return (
              <div class="col-xs-4">
                <div class="card" id="slideRow-card">
                  <img class="card-img" src={item.images} alt={item.title} />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <MDBIcon far icon="heart" />
                  </div>
                  <div class="card-body">
                    <div class="buy d-flex justify-content-between align-items-center">
                      <div class="price text-danger">
                        <h5 class="mt-4" id="price-home">
                          {item.price} JOD
                        </h5>
                      </div>
                      <MDBIcon icon="shopping-cart" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    // <CardGroup style={{ width: '100vw' }}>
    //   <Card id="title-card">
    //     <Card.Title>ON SALE</Card.Title>
    //     {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
    //   </Card>
    //   <Container id="slide-container">
    //     {props.products.mainProducts.onSale &&
    //       props.products.mainProducts.onSale.map((item) => {
    //         return (
    //           <Card>
    //             <Card.Img variant="top" src={item.images} />
    //             <Card.Title>{item.price} JOD</Card.Title>
    //           </Card>
    //         );
    //       })}
    //   </Container>
    // </CardGroup>
  );
};

export const TopRanked = (props) => {
  return (
    <div class="container slideRowContainer">
      <MDBIcon icon="chart-line" id="saleIcon" />
      <span>Top products</span>
      <div class="row" id="slideRow">
        {props.products.mainProducts.ranked &&
          props.products.mainProducts.ranked.map((item) => {
            return (
              <div class="col-xs-4">
                <div class="card" id="slideRow-card">
                  <img class="card-img" src={item.images} alt={item.title} />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <MDBIcon far icon="heart" />
                  </div>
                  <div class="card-body">
                    <div class="buy d-flex justify-content-between align-items-center">
                      <div class="price text-danger">
                        <h5 class="mt-4" id="price-home">
                          {item.price} JOD
                        </h5>
                      </div>
                      <MDBIcon icon="shopping-cart" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const NewArrivals = (props) => {
  return (
    <div class="container slideRowContainer">
      <MDBIcon icon="newspaper" id="saleIcon" />
      <span>New</span>
      <div class="row" id="slideRow">
        {props.products.mainProducts.newest &&
          props.products.mainProducts.newest.map((item) => {
            return (
              <div class="col-xs-4">
                <div class="card" id="slideRow-card">
                  <img class="card-img" src={item.images} alt={item.title} />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <MDBIcon far icon="heart" />
                  </div>
                  <div class="card-body">
                    <div class="buy d-flex justify-content-between align-items-center">
                      <div class="price text-danger">
                        <h5 class="mt-4" id="price-home">
                          {item.price} JOD
                        </h5>
                      </div>
                      <MDBIcon icon="shopping-cart" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export const Recommended = (props) => {
  return (
    <CardGroup style={{ width: '100vw' }} id="card-recommended">
      <Card id="title-card">
        <Card.Title>Things you will LOVE</Card.Title>
        {/* <Card.Img variant="top" src="holder.js/100px200" /> */}
      </Card>
      <Container id="slide-container">
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px200" />
        </Card>
      </Container>
    </CardGroup>
  );
};
