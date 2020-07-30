import React from 'react';

function StoreInfo(props) {
  return (
    <div class="storeInfo" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <img src={props.store.logo} alt={props.store.name} />
      </div>
      <div>
        <h1>{props.store.name}</h1>
        <h4>Category: {props.store.category}</h4>
        <p>Contact number: {props.store.contactNumber}</p>
        <p>Address: {props.store.counrty}, {props.store.city}</p>
        <div>
          {props.store.images.map(img => {
            return (
              <img src='https://picsum.photos/80/80' alt='store' /> /*make it expandable*/
              // <img src={img} alt='store' />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;