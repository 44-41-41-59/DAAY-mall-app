import React from 'react';
import Image from 'react-bootstrap/Image'; 
import { Link} from 'react-router-dom';
// import Row from 'react-bootstrap/Row'; 
// import { connect } from 'react-redux';
import Show from '../show/index';


function Empty(props) {
  return (
    <div style={{margin:'0 auto',textAlign:'center'}} >
      <Image id='emptyImage' src='https://i.ibb.co/1nv4TNJ/2e183d4b59f0ffd3981e9759488f3258.jpg' />
      <Show condition={!props.noProducts}>
        <Link to='/products' > <p id='redirectLink' >Add some?  click to check out our products</p></Link>
      </Show>
    </div>

  );
}

export default Empty;