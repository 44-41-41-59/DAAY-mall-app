import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 
import Image from 'react-bootstrap/Image'; 
import { Link } from 'react-router-dom';
import Empty from '../emptypage/emptypage';

function FavoriteStores(props) {
  return (
    <>
      {/* <Tab.Pane >
        <Row>
          {props.favoriteStores && props.favoriteStores.map((favoriteStore)=>{
            return(
              <Card style={{ width: '25%' }} >
                <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/8xiKPwd_p50lmJzdhV8_2Pbq5gA=/0x0:792x528/1200x800/filters:focal(333x201:459x327)/cdn.vox-cdn.com/uploads/chorus_image/image/65322102/amazonlineup.0.jpg" />
                <Card.Title>{favoriteStore.stores.name}</Card.Title>
              </Card>
            );
          })}
        </Row>
      </Tab.Pane> */}
      <div style={{margin:'0 auto',textAlign:'center'}} >
        <Image id='emptyImage' src='https://i.ibb.co/1nv4TNJ/2e183d4b59f0ffd3981e9759488f3258.jpg' />
        <Link to='/stores' > <p id='redirectLink' >You didn't add any, Check out our stores, we assure you this will not be empty anymore</p></Link>
      </div>
    </>
  );
}

export default FavoriteStores;
