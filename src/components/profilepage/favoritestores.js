import React from 'react';
import './profilepage.css';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row'; 

function FavoriteStores(props) {
  return (
    <>
      <Tab.Pane >
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
      </Tab.Pane>
    </>
  );
}

export default FavoriteStores;
