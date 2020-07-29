import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
import Card from 'react-bootstrap/Card'; 
import { connect } from 'react-redux';



function ViewedProducts(props) {
  return (
    <>
      <Tab.Pane>
        <Row>
          {props.user.wishlist.map((product)=>{
            return(
              <Card style={{ width: '25%' }}>
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

const mapStateToProps = (state) => {
  return { user: state.user};
};

export default connect(mapStateToProps)(ViewedProducts);