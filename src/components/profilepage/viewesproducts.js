import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
import Card from 'react-bootstrap/Card'; 
import {If, Then, Else} from '../if/if';
import Empty from '../emptypage/emptypage';
import ProductCard from '../product/card';
import { connect } from 'react-redux';
import Show from '../show/index'



function ViewedProducts(props) {
  return (
    <>
    <Tab.Pane >
        <Row style={{ marginLeft: '-2vh',display:'flex',justifyContent:'space-around' }}>
          <If condition={props.user.views.length}>
            <Then>
              {props.user.views.map((product) => {
                return (
                  <ProductCard cardProduct={product.products} wishlist={true} searchPage={true} />
                );
              })}
            </Then>
            <Else>
              <Empty />
            </Else>
          </If>
        </Row>
      </Tab.Pane>
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user};
};

export default connect(mapStateToProps)(ViewedProducts);