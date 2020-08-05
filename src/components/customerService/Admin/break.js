import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
import Button from 'react-bootstrap/Button';
export default function Break() {
  const history = useHistory();
  return (
    <div style={{ minHeight: '80vh' }}>
      <img
        style={{
          width: '40vw',
          height: '65vh',
          position: 'absolute',
          left: '0px',
          top: '0px',
          zIndex: '-1',
          marginTop: '10vh',
        }}
        // src="https://memegenerator.net/img/instances/73276713.jpg"
        src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.dribbble.com%2Fusers%2F1124975%2Fscreenshots%2F3101803%2F000.jpg"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '84vh',
        }}
      >
        <Button id="buttonsBreak" onClick={() => history.push('/')} style={{ maxHeight: '10vh' }}>
          Back to main Page
        </Button>
        <Button id="buttonsBreak1"
          onClick={() => history.push('/admin/customerservice')}
          style={{ maxHeight: '10vh' }}
        >
          Take the next customer
        </Button>
      </div>
    </div>
  );
}
