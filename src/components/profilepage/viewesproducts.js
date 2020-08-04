import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
import Card from 'react-bootstrap/Card'; 
import {If, Then, Else} from '../if/if';
import Empty from '../emptypage/emptypage';
import ProductCard from '../product/card';
import { connect } from 'react-redux';



function ViewedProducts(props) {
  return (
    <>
     {/* <Tab.Pane >
        <Row style={{ marginLeft: '2vh' }}>
          <If condition={props.user.viewedProducts.length}>
            <Then>
              {props.wishlist.map((product) => {
                return (
                  <ProductCard cardProduct={product.productID} wishlist={true} searchPage={true} />
                );
              })}
            </Then>
            <Else>
              <Empty />
            </Else>
          </If>
        </Row>
      </Tab.Pane> */}

<Empty/>

      {/* <Tab.Pane>
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
      </Tab.Pane> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user};
};

export default connect(mapStateToProps)(ViewedProducts);