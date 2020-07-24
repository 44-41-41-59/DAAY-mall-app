import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

import './product.css';

export default function ProductPreview(props) {
  return (
    <>
      <h2 id='related-title'>Related Items</h2>
      <CardGroup >
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
    </>
  );
}

