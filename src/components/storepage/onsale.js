import React from 'react';
// import './storepage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import { MDBIcon } from 'mdbreact';

function OnSale(props) {
  return (
    <Card id="storeCards">
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1" id="allProducts1">
          On Sale
        </Accordion.Toggle>
      </Card.Header>
      {props.products.map((product) => {
        return (
          <div id="cardsStore">
            <Accordion.Collapse eventKey="1">
              <div class="col-12 col-sm-12 col-md-16 col-lg-14" id='searchResultCards'>
                <div class="card" id='cardImageSearch'>
                  <img class="card-img" id='cardImageSearch' src={product.images[0]} alt={product.name} />
                  <div class="card-img-overlay d-flex justify-content-end">
                    <MDBIcon far icon="heart" id='heartIcon' />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">{product.name.split(' ')[0]} {product.name.split(' ')[1]} {product.name.split(' ')[2]}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
                    <div class="buy d-flex justify-content-between align-items-center">
                      <div class="price" id='priceColor'><h5 class="mt-4" id='price-search'>{product.price} JOD</h5></div>
                      <div id='cartAdd-search'>
                        <div>Add to cart</div>
                        <div>
                          <MDBIcon icon="shopping-cart" id='addCart-search-icon' />
                        </div>
                      </div>
                      {/* <button>Add to Cart<MDBIcon icon="shopping-cart" /></button> */}
                    </div>
                  </div>
                </div>

              </div>
            </Accordion.Collapse>
          </div>
        );
      })}
    </Card>
  );
}

export default OnSale;