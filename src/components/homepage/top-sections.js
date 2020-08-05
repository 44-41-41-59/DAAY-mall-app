import React from 'react';
import './homepage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TopSections(props) {
  return (

    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', maxWidth:'75vw' }}>
      <div style={{ backgroundColor: '#f5f5f5', height: '30vh', width: '20vw' }} >
        <a href='#saleSection' class='fade-in' >
          <img style={{ width: '100%', height: '30vh', padding: '8vh 8vh' }}
            src='https://i.ibb.co/FzJkQpS/coollogo-com-16050293.png'
            alt='sale banner'
          />
        </a>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', height: '30vh', width: '30vw', paddingRight:'2vw', paddingLeft:'2vw'}}>
        <a href='#topSection' class='fade-in'>
          <img style={{ width: '100%', height: '30vh', padding: '8vh 0vh' }}
            src='https://i.ibb.co/Sy5JLRY/coollogo-com-276811715.png'
            alt='best seller banner'
          />
        </a>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', height: '30vh', width: '20vw' }}>
        <a href='#newSection' class='fade-in'>
          <img style={{ width: '100%', height: '30vh', padding: '8vh 8vh' }}
            src='https://i.ibb.co/dcc0fSF/coollogo-com-44415114.png'
            alt='new banner'
          />
        </a>
      </div>
    </div>
  );
}


export default TopSections;

