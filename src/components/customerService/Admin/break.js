import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';
export default function Break() {
  const history = useHistory();
  return (
    <div style={{ minHeight: '80vh' }}>
      <img
        style={{
          width: '100vw',
          height: '95vh',
          position: 'absolute',
          left: '0px',
          top: '0px',
          zIndex: '-1',
          marginTop: '10vh',
        }}
        // src="https://memegenerator.net/img/instances/73276713.jpg"
        src="https://uploads.toptal.io/blog/image/128038/toptal-blog-image-1548744925019-395cde9862cfed376f3dfb7c907604d6.jpg"
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '84vh',
        }}
      >
        <button onClick={() => history.push('/')} style={{ maxHeight: '10vh' }}>
          Back to main Page
        </button>
        <button
          onClick={() => history.push('/admin/customerservice')}
          style={{ maxHeight: '10vh' }}
        >
          Back to hack ladies
        </button>
      </div>
    </div>
  );
}
