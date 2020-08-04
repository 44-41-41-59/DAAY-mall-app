import React from 'react';
import Image from 'react-bootstrap/Image'; 
import { Link} from 'react-router-dom';
import './notfound.css';
// import Row from 'react-bootstrap/Row'; 
// import { connect } from 'react-redux';


function Empty(props) {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
      {/* <Image src='https://i.ibb.co/D9DhLnc/6ab1e47de248ab872c71cd685945f0f5.jpg' /> */}
      <Image id='emptyImage' src='https://ibb.co/n0gKjy8' />
      <Link to='/' > <p id='redirectLink' >Add some? click to checkout our products</p></Link>
    </div>

  );
}

export default Empty;