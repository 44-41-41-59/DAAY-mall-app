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
      <Tab.Pane >
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
      </Tab.Pane>
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