import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 

function Wishlist(props) {
  return (
    <>
      <Tab.Pane eventKey="second">
        <Row>
          {props.user.wishlist.map((product)=>{
            return(
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Title>{product.title}</Card.Title>
              </Card>
            );
          })}
        </Row>
      </Tab.Pane>
    </>
  );
}

export default Wishlist;
