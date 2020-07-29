import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab'; 

function Wishlist(props) {
  return (
    <>
      <Tab.Pane>
        <div class="card mb-3" style={{width: '540px'}}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://cdn.shopify.com/s/files/1/0249/1218/products/TIMY-Balancing-Duo-PDP-1-LowRes_large.jpg?v=1578949459" class="card-img" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style={{width: '540px'}}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://www.horlicks.com.my/sk-eu/content/dam/brands/horlicks/malaysia/1734230-product-mobile.jpg.rendition.1960.1960.jpg" class="card-img" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3" style={{width: '540px'}}>
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="https://cdn.shopify.com/s/files/1/0811/8339/products/SXC-Bundle-Website-Product-Image_grande.jpg?v=1581029083" class="card-img" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    </>
  );
}

export default Wishlist;
