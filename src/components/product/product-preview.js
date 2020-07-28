import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import './product.css';
import './buyProduct.scss';

export default function ProductPreview(props) {
  return (
    <>
      <div>
        <CardGroup class="related">
          <div id="text">
            <h1><span id="offset">R</span>ELATED<span id="offset"> I</span>TEMS</h1>
          </div>
          <Container id='related-slide-container'>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
            <Card >
              <Card.Img variant="top" src="holder.js/100px200" />
            </Card>
          </Container>

        </CardGroup>
      </div>
    </>
  );
}

