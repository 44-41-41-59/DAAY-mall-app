import React from 'react';
import Image from 'react-bootstrap/Image'; 
import { Link} from 'react-router-dom';
import './notfound.css';
// import Row from 'react-bootstrap/Row'; 
// import { connect } from 'react-redux';


function NotFound(props) {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}} >
      {/* <Image src='https://i.ibb.co/D9DhLnc/6ab1e47de248ab872c71cd685945f0f5.jpg' /> */}
      <Image id='notfoundImage' src='https://i.ibb.co/2hbQdBF/11dc96d2e4daca3ea8ff6aa41299b5e1.gif' />
      <Link to='/' > <p id='returnLink' >Click to return to Home Page</p></Link>
    </div>

  );
}

export default NotFound
;