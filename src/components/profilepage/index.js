import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Tabs from './tabs';
// import Sonnet from 'react-bootstrap/Sonnet'; 

function Profilepage() {
  return (
    <>
      <div class="userInfo">
        <Image src="holder.js/171x180" roundedCircle />
        <Card id='userInfoBox' >
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            {/* <Card.Title>Special title treatment</Card.Title> */}
            <Card.Text>
      With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Tabs/>
    </>
  );
}
    
export default Profilepage;