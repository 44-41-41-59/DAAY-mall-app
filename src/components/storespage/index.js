import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import React,{useEffect} from 'react';
import './storespage.css';
import Tab from 'react-bootstrap/Tab'; 
import Row from 'react-bootstrap/Row';
import { connect,useDispatch } from 'react-redux';
import {getStores} from '../../store/actions/stores';
import { Link } from 'react-router-dom';


function Stores(props) {

  const dipatch=useDispatch();
  useEffect(()=>{ 
    dipatch(getStores());
  },[dipatch]);
 
  return (
    <>  
      <MDBCol>
        <MDBCard style={{ width: '22rem' }}>
          <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* <Tab.Pane >
        <Row>
          {props.stores.results.map((store)=>{
            return(
              <>
                <Link to={`/store/${store._id}`} >
                  <div>{store.name}</div>
                  <img  src={store.logo} alt={store.name} />
                </Link>
              </>
            );
          })}
        </Row>
      </Tab.Pane> */}
    </>
  );
}

const mapStateToProps= (state) => {
  return { stores: state.stores};
};

// const mapDispatchToProps= {getStores};

// const mapDispatchToProps= (dispatch) => ({
//   getStores: () => dispatch(getStores()),
// });

export default connect(mapStateToProps)(Stores);


