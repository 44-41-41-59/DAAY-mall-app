import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Tabs from './tabs';
import { connect } from 'react-redux';


function Profilepage(props) {
  return (
    <>
      <div class="userInfo">
        <Image src="holder.js/171x180" roundedCircle />
        <Card id='userInfoBox' >
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text >
              {props.user.username}
      With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Tabs/>
    </>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user};
};

export default connect(mapStateToProps)(Profilepage);    