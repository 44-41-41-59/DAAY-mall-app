import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdbreact';
import React,{useEffect} from 'react';
import './storespage.css';
import { connect,useDispatch } from 'react-redux';
import {getStores} from '../../store/actions/stores';
import { Link } from 'react-router-dom';
import {MDBIcon} from 'mdbreact';
import { If, Then, Else } from '../if/if';
import Reviews from '../product/reviews';


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
            if(store.reviews){

            }
            let sum = 0;
            let ratingStars = [];
            let noRate = false;
            let noRateStars = [];
            let emptyRatingStars = [];
            store.reviews.forEach(review => {
              sum = sum + review.rate;
            });
            let avg = Math.ceil(sum /store.reviews.length);
            for (let i = 0; i < avg; i++) {
              ratingStars.push(' ');
            }
            for (let i = 0; i < 5 - avg; i++) {
              emptyRatingStars.push(' ');
            }
            if (isNaN(avg)) {
              noRate = true;
              for (let i = 0; i < 5; i++) {
                noRateStars.push(' ');
              }
            }
            return(
              <div >
                <MDBCard id='storeCard'>
                  <MDBCardImage id='storeImage' src={store.logo} alt={store.name} />
                  <MDBCardBody>
                    <div id='storeInfo' >
                      <MDBCardTitle>{store.name}</MDBCardTitle>
                      <p class="card-text">Country : {store.country}</p>
                      <If condition={!noRate}>
                        <Then>
                          {ratingStars.map(star => {
                            return <MDBIcon icon='star' />;
                          })}
                          {emptyRatingStars.map(star => {
                            return <MDBIcon far icon='star' />;
                          })}
                        </Then>
                        <Else>
                          {noRateStars.map(star => {
                            return <MDBIcon far icon='star' />;
                          })}
                        </Else>
                      </If>
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


