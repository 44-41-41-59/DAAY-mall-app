import React from 'react';
import './profilepage.css';
import Tab from 'react-bootstrap/Tab'; 
import Empty from '../emptypage/emptypage';
import Image from 'react-bootstrap/Image'; 
import { Link } from 'react-router-dom';

function Orders(props) {
  return (
    <>
      {/* <Tab.Pane>
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
      </Tab.Pane> */}
      <div style={{margin:'0 auto',textAlign:'center'}} >
        <Image id='emptyImage' src='https://i.ibb.co/1nv4TNJ/2e183d4b59f0ffd3981e9759488f3258.jpg' />
        <Link to='/stores' > <p id='redirectLink' >You didn't order any, Check out our products, we assure you this will not be empty anymore</p></Link>
      </div>
    </>
  );
}

export default Orders;
