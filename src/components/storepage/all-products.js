import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import { MDBIcon } from 'mdbreact';


function StoreProducts(props) {
  return (
    <Card id="storeCards">
      <h1 as={Button} variant="link" eventKey="0" id="allProducts">
          All products
      </h1>
      {props.products.map((product) => {
        return (
          <div id="cardsStore">
            <div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Card>
  );
}

export default StoreProducts;