import React from 'react';
import './storepage.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import OnSale from './onsale';
import New from './new';
import Summer from './summer';
import InStock from './instock';
import Row from 'react-bootstrap/Row';

function Storepage() {
  return (
    <>
      <div class="storeInfo">
        <Row>
          
            <Card.Img variant="top" src="holder.js/225x180" />
          
          <Card>
            <Card.Header as="h5">Featured  <Button variant="warning">Add to favorite</Button> </Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title> */}
              <Card.Text>
      With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </div>
      
      <div class='categoryButtons' >
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>{' '}
      </div>

      <Accordion defaultActiveKey="0" >
        <OnSale/>
        <New/>
        <Summer/>
        <InStock/>
      </Accordion>
    </>
  
  );
}
    
export default Storepage;