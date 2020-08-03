import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
// import { connect } from 'react-redux';


function Wishlist(props) {
  return (
    <>  
      <Tab.Pane >
        <Row>
          {props.wishlist.map((product)=>{
            return(
              <Card style={{ width: '25%' }} >
                <Card.Img variant="top" src={product.productID.images[0]} />
                <Card.Title>No Wishlists, Add some </Card.Title>
              </Card>
            );
          })}
        </Row>
      </Tab.Pane>
    </>
  );
}

export default Wishlist;