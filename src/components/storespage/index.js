import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import React,{useEffect} from 'react';
import './storespage.css';
import { connect,useDispatch } from 'react-redux';
import {getStores} from '../../store/actions/stores';
import { Link } from 'react-router-dom';
import { FaFileExcel, FaAlignJustify } from 'react-icons/fa';
import {MDBIcon} from 'mdbreact';


function Stores(props) {

  const dipatch=useDispatch();
  useEffect(()=>{ 
    dipatch(getStores());
  },[]);
 
  return (
    <div style={{height:'90vh' }} >  
      <h3 id='title' >Our Stores</h3>
      <hr/>
      <MDBCol>
        <div  style={{display:'flex'}}>
          {props.stores.results.map((store)=>{
            return(
              <div >
                <MDBCard id='storeCard'>
                  <MDBCardImage id='storeImage' src={store.logo} alt={store.name} />
                  <MDBCardBody>
                    <div id='storeInfo' >
                      <MDBCardTitle>{store.name}</MDBCardTitle>
                      <p class="card-text">Country : {store.country}</p>
                      <MDBIcon icon='star' />
                      <MDBIcon icon='star' />
                      <MDBIcon icon='star' />
                      <MDBIcon icon='star' />
                      <MDBIcon far icon='star' />
                    </div>
                    <Link to={`/store/${store._id}`} >
                      <MDBBtn id='button' color='#b1bace mdb-color lighten-4'>View Store</MDBBtn>
                    </Link>
                  </MDBCardBody>
                </MDBCard>
              </div>
            );
          })}
        </div>
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
    </div>
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


