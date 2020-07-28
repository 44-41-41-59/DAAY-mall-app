import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import Nav from 'react-bootstrap/Nav';
import Wishlist from './wishlist';
import FavoriteStores from './favoritestores';
import Orders from './orders';
import ViewedProducts from './viewesproducts';


function Profilepage(props) {
  return (
    <>
      <div class="userInfo">
        <Image src={props.user.avatar} style={{width:'15%'}} roundedCircle />
        <Card id='userInfoBox' >
          <Card.Header as="h5">User Information</Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text >
              Name: {props.user.username} <br/>
              Email: {props.user.email} <br/>
              Role: {props.user.role}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Wish-list</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Favorite Stores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Viewed Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Settings</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Wishlist/>
              <FavoriteStores/>
              <Orders/>
              <ViewedProducts/>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user};
};

export default connect(mapStateToProps)(Profilepage);