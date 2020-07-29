import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';
            
import { MDBIcon } from 'mdbreact';


function Footer() {
  return (
    <footer class='page-footer'>

      <Navbar bg="dark" expand="lg" >
        <div class='container'>

          <div class='about'>  
            <h6>About</h6>
            <p>
            DAAY-mall is an online platform for stores owners to display and sell their products in an easy, efficient and secure process.
            </p>
          </div>

          <div class='connect'>
            <h6>Stay Updated </h6>
            <p>
               Every Sunday arrives new collocetion and <br/>
               every Thusrsday there are coupons for every 50 JOD spent.
            </p>
          </div>

          <div class='socialMedia'>
            <h6>Find us on</h6>
            <p>
              <a href="https://www.facebook.com/" class="genIcon fb"><MDBIcon fab icon="facebook-f" /></a>
              <a href="https://www.twitter.com/" class="genIcon tw"><MDBIcon fab icon="twitter" /></a>
              <a href="https://www.google.com/" class="genIcon go"><MDBIcon fab icon="google" /></a>
              <a href="https://www.yahoo.com/" class="genIcon ya"><MDBIcon fab icon="yahoo" /></a>


            </p>
          </div>

          <div class='help'>
            <h6>Help Center</h6>
            <p>
                 FAQ <br/>
                Online Service
            </p> 
          </div>

        </div>
      </Navbar>
    
    </footer>

  );
}
  
export default Footer;