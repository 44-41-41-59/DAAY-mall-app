import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from 'mdbreact';


function Footer() {
  return (
    <MDBFooter color='#212121 grey darken-4' className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow style={{justifyContent:'space-around'}}>
          <MDBCol md="auto">
            <p >
              <h5 className="title">About us</h5>
              <strong>DAAY-mall</strong> is an online platform for stores owners to display and sell their products in an easy, efficient and secure process.
              <br />
              <strong><Link to='/Aboutus' >Learn More</Link></strong>
            </p>
          </MDBCol>
          <MDBCol md="auto">
            <p>
              <h5>Stay Updated </h5>
              Every Sunday arrives new collocetion and every Thusrsday there are coupons for every 50 JOD spent.
            </p>
          </MDBCol>
          <MDBCol md="auto">
            <p>
              <h5 classNamFe="title">Find Us ON</h5>
              <br />
              <a href="https://www.facebook.com/" class="genIcon fb">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="https://www.twitter.com/" class="genIcon tw">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="https://www.google.com/" class="genIcon go">
                <MDBIcon fab icon="google" />
              </a>
              <a href="https://www.yahoo.com/" class="genIcon ya">
                <MDBIcon fab icon="yahoo" />
              </a>
            </p>
          </MDBCol>
          <MDBCol md="auto">
            <p>
              <h5>Help Center</h5>
              <Link to='/help'>FAQ</Link> <br />
              <Link to='/chat'> Online Service </Link>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/"> DAAY-mall.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

  // <footer class='page-footer'>

  //   <Navbar bg="dark" expand="lg" >
  //     <div class='container'>

  //       <div class='about'>  
  //         <h6>About</h6>
  //         <p>
  //         DAAY-mall is an online platform for stores owners to display and sell their products in an easy, efficient and secure process. <br/>
  //           <Link to='/Aboutus' >Learn More</Link>
  //         </p>
  //       </div>

  //       <div class='connect'>
  //         <h6>Stay Updated </h6>
  //         <p>
  //            Every Sunday arrives new collocetion and <br/>
  //            every Thusrsday there are coupons for every 50 JOD spent.
  //         </p>
  //       </div>

  //       <div class='socialMedia'>
  //         <h6>Find us on</h6>
  //         <p>
  //           <a href="https://www.facebook.com/" class="genIcon fb"><MDBIcon fab icon="facebook-f" /></a>
  //           <a href="https://www.twitter.com/" class="genIcon tw"><MDBIcon fab icon="twitter" /></a>
  //           <a href="https://www.google.com/" class="genIcon go"><MDBIcon fab icon="google" /></a>
  //           <a href="https://www.yahoo.com/" class="genIcon ya"><MDBIcon fab icon="yahoo" /></a>


  //         </p>
  //       </div>

  //       <div class='help'>
  //         <h6>Help Center</h6>
  //         <p>
  //           <Link to='/help'>FAQ</Link> <br/>
  //           <Link to='/chat'> Online Service </Link>
  //         </p> 
  //       </div>
  //     </div>

  //     <div> &copy; 2020 <br/>
  //     All rights reserved for DAAY-mall </div>
  //   </Navbar>
  // </footer>

  );
}

export default Footer;